#!/bin/bash

echo "Uninstalling farm_fd2 module..."
echo "  Deleting custom fd2_fields..."
docker exec fd2_farmos_school drush php-eval "\Drupal\field\Entity\FieldStorageConfig::loadByName('taxonomy_term', 'fd2_unit_conversions')->delete();"
docker exec fd2_farmos_school drush php-eval "\Drupal\field\Entity\FieldStorageConfig::loadByName('taxonomy_term', 'fd2_harvest_unit')->delete();"
echo "  Deleted."
docker exec fd2_farmos_school drush pmu farm_fd2 -y
echo "Uninstalled."

echo "Rebuilding farm_fd2 module..."
npm run build:fd2 > /dev/null
echo "Rebuilt."

echo "Reinstalling farm_fd2 module..."
docker exec fd2_farmos_school drush en farm_fd2 -y
echo "Reinstalled."
