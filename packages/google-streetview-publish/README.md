[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-streetview-publish)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/streetview-publish.svg)](https://www.npmjs.org/package/@googlemaps/streetview-publish)




 client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-streetview-publish/CHANGELOG.md).

* [ Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-streetview-publish](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-streetview-publish)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)

  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Installing the client library

```bash
npm install @googlemaps/streetview-publish
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. Specifies if a download URL for the photos bytes should be
 *  returned in the Photos response.
 */
// const view = {}
/**
 *  Optional. The maximum number of photos to return.
 *  `pageSize` must be non-negative. If `pageSize` is zero or is not provided,
 *  the default page size of 100 is used.
 *  The number of photos returned in the response may be less than `pageSize`
 *  if the number of photos that belong to the user is less than `pageSize`.
 */
// const pageSize = 1234
/**
 *  Optional. The
 *  nextPageToken google.streetview.publish.v1.ListPhotosResponse.next_page_token
 *  value returned from a previous
 *  ListPhotos google.streetview.publish.v1.StreetViewPublishService.ListPhotos
 *  request, if any.
 */
// const pageToken = 'abc123'
/**
 *  Optional. The filter expression. For example:
 *  `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.
 *  The filters supported are: `placeId`, `min_latitude`, `max_latitude`,
 *  `min_longitude`, `max_longitude`. See https://google.aip.dev/160 for more
 *  information.
 */
// const filter = 'abc123'
/**
 *  Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more
 *  information, see
 *  http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
 *  If language_code is unspecified, the user's language preference for Google
 *  services is used.
 */
// const languageCode = 'abc123'

// Imports the Publish library
const {StreetViewPublishServiceClient} =
  require('@googlemaps/streetview-publish').v1;

// Instantiates a client
const publishClient = new StreetViewPublishServiceClient();

async function callListPhotos() {
  // Construct request
  const request = {
    view,
  };

  // Run request
  const iterable = publishClient.listPhotosAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListPhotos();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-streetview-publish/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Street_view_publish_service.batch_delete_photos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_delete_photos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_delete_photos.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.batch_get_photos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_get_photos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_get_photos.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.batch_update_photos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_update_photos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.batch_update_photos.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.create_photo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.create_photo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.create_photo.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.create_photo_sequence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.create_photo_sequence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.create_photo_sequence.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.delete_photo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.delete_photo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.delete_photo.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.delete_photo_sequence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.delete_photo_sequence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.delete_photo_sequence.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.get_photo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.get_photo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.get_photo.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.get_photo_sequence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.get_photo_sequence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.get_photo_sequence.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.list_photo_sequences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.list_photo_sequences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.list_photo_sequences.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.list_photos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.list_photos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.list_photos.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.start_photo_sequence_upload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.start_photo_sequence_upload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.start_photo_sequence_upload.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.start_upload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.start_upload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.start_upload.js,packages/google-streetview-publish/samples/README.md) |
| Street_view_publish_service.update_photo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.update_photo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/generated/v1/street_view_publish_service.update_photo.js,packages/google-streetview-publish/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-streetview-publish/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-streetview-publish/samples/quickstart.js,packages/google-streetview-publish/samples/README.md) |



The [ Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @googlemaps/streetview-publish@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/publish/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing

[auth]: https://cloud.google.com/docs/authentication/getting-started