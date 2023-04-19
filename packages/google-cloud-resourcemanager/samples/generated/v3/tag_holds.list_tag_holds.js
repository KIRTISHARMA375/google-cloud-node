// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START cloudresourcemanager_v3_generated_TagHolds_ListTagHolds_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent TagValue. Must be of the form:
   *  `tagValues/{tag-value-id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of TagHolds to return in the response. The
   *  server allows a maximum of 300 TagHolds to return. If unspecified, the
   *  server will use 100 as the default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A pagination token returned from a previous call to
   *  `ListTagHolds` that indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Criteria used to select a subset of TagHolds parented by the
   *  TagValue to return. This field follows the syntax defined by aip.dev/160;
   *  the `holder` and `origin` fields are supported for filtering. Currently
   *  only `AND` syntax is supported. Some example queries are:
   *    * `holder =
   *      //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group`
   *    * `origin = 35678234`
   *    * `holder =
   *      //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group
   *      AND origin = 35678234`
   */
  // const filter = 'abc123'

  // Imports the Resourcemanager library
  const {TagHoldsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagHoldsClient();

  async function callListTagHolds() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await resourcemanagerClient.listTagHoldsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTagHolds();
  // [END cloudresourcemanager_v3_generated_TagHolds_ListTagHolds_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));