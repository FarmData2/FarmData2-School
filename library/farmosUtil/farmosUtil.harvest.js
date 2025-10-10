/*
 * Utility functions for getting and working with harvest data.
 */

import dayjs from 'dayjs';
import { getFarmOSInstance } from './farmosUtil.core.js';
import { getCropIdToTermMap } from './farmosUtil.crops.js';
import {
  getPlantingLocationObjects,
  getLogCategoryObjects,
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

  let logName = dayjs(harvestDate).format('YYYY-MM-DD');
  logName += '_ha_';
  const cropIdToNameMap = await getCropIdToTermMap();
  logName += plantAsset.relationships.plant_type
    .map((crop) => cropIdToNameMap.get(crop.id).attributes.name)
    .join('_');

  console.log(logName);
}

/*
  // Helper functions from the utilities module.
  const locationsArray = await getPlantingLocationObjects([
    locationName,
    ...bedNames,
  ]);
  const logCategoriesArray = await getLogCategoryObjects(logCategories);
  const quantitiesArray = getQuantityObjects(quantities);

  const cropIdToNameMap = await getCropIdToTermMap();
  let logName = dayjs(seedingDate).format('YYYY-MM-DD');
  if (logCategories.includes('seeding_tray')) {
    logName += '_ts_';
  } else if (logCategories.includes('seeding_direct')) {
    logName += '_ds_';
  } else if (logCategories.includes('seeding_cover_crop')) {
    logName += '_cs_';
  }

  logName += plantAsset.relationships.plant_type
    .map((crop) => cropIdToNameMap.get(crop.id).attributes.name)
    .join('_');

  const seedingLogData = {
    type: 'log--seeding',
    attributes: {
      name: logName,
      timestamp: dayjs(seedingDate).format(),
      status: 'done',
      is_movement: true,
      purchase_date: dayjs(seedingDate).format(),
    },
    relationships: {
      location: locationsArray,
      asset: [{ type: 'asset--plant', id: plantAsset.id }],
      category: logCategoriesArray,
      quantity: quantitiesArray,
    },
  };

  const farm = await getFarmOSInstance();
  const seedingLog = farm.log.create(seedingLogData);
  await farm.log.send(seedingLog);

  return seedingLog;
}
*/
