/*
 * Utility functions for getting and working with harvest data.
 */

import dayjs from 'dayjs';
import { getFarmOSInstance } from './farmosUtil.core.js';
import {
  getCropIdToTermMap,
  getCropNameToTermMap,
} from './farmosUtil.crops.js';
import {
  getPlantingLocationObjects,
  //getLogCategoryObjects,
  getQuantityObjects,
} from './farmosUtil.utilities.js';

/**
 * Create a new harvest log.
 *
 * @param {string} harvestDate the date of the harvest.
 * @param {string} locationName the name of the location where the harvest occurred.
 * @param {Array<string>} bedNames the names of the bed(s) where the harvest occurred.
 * @param {Object} plantAsset the plant asset affected by the harvest.
 * @param {Object} quantity the quantity associated with the harvest.
 * @returns {Object} the new harvest log.
 * @throws {Error} if unable to create the harvest log.
 *
 * @category Harvest
 */
export async function createHarvestLog(
  harvestDate,
  locationName,
  bedNames,
  plantAsset,
  quantity
) {
  const locationsArray = await getPlantingLocationObjects([
    locationName,
    ...bedNames,
  ]);

  const quantitiesArray = getQuantityObjects([quantity]);
  //const logCategoriesArray = await getLogCategoryObjects(['harvest']);

  let logName = dayjs(harvestDate).format('YYYY-MM-DD');
  logName += '_ha_';
  const cropIdToNameMap = await getCropIdToTermMap();
  logName += plantAsset.relationships.plant_type
    .map((crop) => cropIdToNameMap.get(crop.id).attributes.name)
    .join('_');

  const harvestLogData = {
    type: 'log--harvest',
    attributes: {
      name: logName,
      timestamp: dayjs(harvestDate).format(),
      status: 'done',
    },
    relationships: {
      location: locationsArray,
      asset: [{ type: 'asset--plant', id: plantAsset.id }],
      //category: logCategoriesArray,
      quantity: quantitiesArray,
    },
  };

  const farm = await getFarmOSInstance();
  const harvestLog = farm.log.create(harvestLogData);
  await farm.log.send(harvestLog);

  return harvestLog;
}

/**
 * Get the harvest log with the specified id.
 *
 * @param {string} harvestLogId the id of the harvest log.
 * @returns {Object} the harvest log with the specified id.
 * @throws {Error} if unable to get the harvest log.
 *
 * @category Harvest
 */
export async function getHarvestLog(harvestLogId) {
  const farm = await getFarmOSInstance();
  const results = await farm.log.fetch({
    filter: { type: 'log--harvest', id: harvestLogId },
  });
  return results.data[0];
}

/**
 * Delete the harvest log with the specified id.
 *
 * @param {string} harvestLogId the id of the harvest log.
 * @returns {Object} the deleted harvest log.
 * @throws {Error} if unable to delete the harvest log.
 *
 * @category Harvest
 */
export async function deleteHarvestLog(harvestLogId) {
  const farm = await getFarmOSInstance();
  try {
    const result = await farm.log.delete('harvest', harvestLogId);
    return result;
  } catch (error) {
    console.error('deleteHarvestLog:');
    console.error('Unable to delete harvest log with id: ' + harvestLogId);
    console.error(error.message);
    console.error(error);
    throw error;
  }
}

/**
 *
 * @param {string} cropName the name of the crop for which to get the harvest units.
 * @returns {Array<Object>} an array of the unit objects for the crop.
 */
export async function getHarvestUnits(cropName) {
  const cropMap = await getCropNameToTermMap();
  const cropObj = cropMap.get(cropName);
  const harvestUnits = [
    cropObj.relationships.fd2_harvest_unit,
    ...cropObj.relationships.fd2_unit_conversions,
  ];

  return harvestUnits;
}
