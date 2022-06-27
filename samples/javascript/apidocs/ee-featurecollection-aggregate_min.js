/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_featurecollection_aggregate_min]
// FeatureCollection of power plants in Belgium.
var fc = ee.FeatureCollection('WRI/GPPD/power_plants')
             .filter('country_lg == "Belgium"');

print('Min of power plant capacities (MW)',
      fc.aggregate_min('capacitymw'));  // 1.8
// [END earthengine__apidocs__ee_featurecollection_aggregate_min]
