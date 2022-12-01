// Copyright 2022 Google LLC
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

/* global window */
import type * as gax from 'google-gax';
import {GrafeasClient} from '@google-cloud/grafeas';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/container_analysis_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './container_analysis_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Retrieves analysis results of Cloud components such as Docker container
 *  images. The Container Analysis API is an implementation of the
 *  [Grafeas](https://grafeas.io) API.
 *
 *  Analysis results are stored as a series of occurrences. An `Occurrence`
 *  contains information about a specific analysis instance on a resource. An
 *  occurrence refers to a `Note`. A note contains details describing the
 *  analysis and is generally stored in a separate project, called a `Provider`.
 *  Multiple occurrences can refer to the same note.
 *
 *  For example, an SSL vulnerability could affect multiple images. In this case,
 *  there would be one note for the vulnerability and an occurrence for each
 *  image with the vulnerability referring to that note.
 * @class
 * @memberof v1
 */
export class ContainerAnalysisClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  containerAnalysisStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ContainerAnalysisClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new ContainerAnalysisClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ContainerAnalysisClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      notePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/notes/{note}'
      ),
      occurrencePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/occurrences/{occurrence}'
      ),
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.devtools.containeranalysis.v1.ContainerAnalysis',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.containerAnalysisStub) {
      return this.containerAnalysisStub;
    }

    // Put together the "service stub" for
    // google.devtools.containeranalysis.v1.ContainerAnalysis.
    this.containerAnalysisStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.devtools.containeranalysis.v1.ContainerAnalysis'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.devtools.containeranalysis.v1
            .ContainerAnalysis,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const containerAnalysisStubMethods = [
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
      'getVulnerabilityOccurrencesSummary',
    ];
    for (const methodName of containerAnalysisStubMethods) {
      const callPromise = this.containerAnalysisStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.containerAnalysisStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'containeranalysis.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'containeranalysis.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Sets the access control policy on the specified note or occurrence.
   * Requires `containeranalysis.notes.setIamPolicy` or
   * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
   * a note or an occurrence, respectively.
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being specified.
   *   See the operation documentation for the appropriate value for this field.
   * @param {google.iam.v1.Policy} request.policy
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   *   the fields in the mask will be modified. If no mask is provided, the
   *   following default mask is used:
   *
   *   `paths: "bindings, etag"`
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/container_analysis.set_iam_policy.js</caption>
   * region_tag:containeranalysis_v1_generated_ContainerAnalysis_SetIamPolicy_async
   */
  setIamPolicy(
    request?: protos.google.iam.v1.ISetIamPolicyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.ISetIamPolicyRequest | undefined,
      {} | undefined
    ]
  >;
  setIamPolicy(
    request: protos.google.iam.v1.ISetIamPolicyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.ISetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  setIamPolicy(
    request: protos.google.iam.v1.ISetIamPolicyRequest,
    callback: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.ISetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  setIamPolicy(
    request?: protos.google.iam.v1.ISetIamPolicyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.v1.IPolicy,
          protos.google.iam.v1.ISetIamPolicyRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.ISetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.ISetIamPolicyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        resource: request.resource ?? '',
      });
    this.initialize();
    return this.innerApiCalls.setIamPolicy(request, options, callback);
  }
  /**
   * Gets the access control policy for a note or an occurrence resource.
   * Requires `containeranalysis.notes.setIamPolicy` or
   * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
   * a note or occurrence, respectively.
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {google.iam.v1.GetPolicyOptions} request.options
   *   OPTIONAL: A `GetPolicyOptions` object for specifying options to
   *   `GetIamPolicy`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/container_analysis.get_iam_policy.js</caption>
   * region_tag:containeranalysis_v1_generated_ContainerAnalysis_GetIamPolicy_async
   */
  getIamPolicy(
    request?: protos.google.iam.v1.IGetIamPolicyRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.IGetIamPolicyRequest | undefined,
      {} | undefined
    ]
  >;
  getIamPolicy(
    request: protos.google.iam.v1.IGetIamPolicyRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.IGetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getIamPolicy(
    request: protos.google.iam.v1.IGetIamPolicyRequest,
    callback: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.IGetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getIamPolicy(
    request?: protos.google.iam.v1.IGetIamPolicyRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.v1.IPolicy,
          protos.google.iam.v1.IGetIamPolicyRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.IGetIamPolicyRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.v1.IPolicy,
      protos.google.iam.v1.IGetIamPolicyRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        resource: request.resource ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getIamPolicy(request, options, callback);
  }
  /**
   * Returns the permissions that a caller has on the specified note or
   * occurrence. Requires list permission on the project (for example,
   * `containeranalysis.notes.list`).
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {string[]} request.permissions
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/container_analysis.test_iam_permissions.js</caption>
   * region_tag:containeranalysis_v1_generated_ContainerAnalysis_TestIamPermissions_async
   */
  testIamPermissions(
    request?: protos.google.iam.v1.ITestIamPermissionsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.iam.v1.ITestIamPermissionsResponse,
      protos.google.iam.v1.ITestIamPermissionsRequest | undefined,
      {} | undefined
    ]
  >;
  testIamPermissions(
    request: protos.google.iam.v1.ITestIamPermissionsRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.iam.v1.ITestIamPermissionsResponse,
      protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  testIamPermissions(
    request: protos.google.iam.v1.ITestIamPermissionsRequest,
    callback: Callback<
      protos.google.iam.v1.ITestIamPermissionsResponse,
      protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  testIamPermissions(
    request?: protos.google.iam.v1.ITestIamPermissionsRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.iam.v1.ITestIamPermissionsResponse,
          protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.iam.v1.ITestIamPermissionsResponse,
      protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.iam.v1.ITestIamPermissionsResponse,
      protos.google.iam.v1.ITestIamPermissionsRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        resource: request.resource ?? '',
      });
    this.initialize();
    return this.innerApiCalls.testIamPermissions(request, options, callback);
  }
  /**
   * Gets a summary of the number and severity of occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project to get a vulnerability summary for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} request.filter
   *   The filter expression.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [VulnerabilityOccurrencesSummary]{@link google.devtools.containeranalysis.v1.VulnerabilityOccurrencesSummary}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/container_analysis.get_vulnerability_occurrences_summary.js</caption>
   * region_tag:containeranalysis_v1_generated_ContainerAnalysis_GetVulnerabilityOccurrencesSummary_async
   */
  getVulnerabilityOccurrencesSummary(
    request?: protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
      (
        | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  getVulnerabilityOccurrencesSummary(
    request: protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
      | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getVulnerabilityOccurrencesSummary(
    request: protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest,
    callback: Callback<
      protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
      | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getVulnerabilityOccurrencesSummary(
    request?: protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
          | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
      | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.devtools.containeranalysis.v1.IVulnerabilityOccurrencesSummary,
      (
        | protos.google.devtools.containeranalysis.v1.IGetVulnerabilityOccurrencesSummaryRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getVulnerabilityOccurrencesSummary(
      request,
      options,
      callback
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified note resource name string.
   *
   * @param {string} project
   * @param {string} note
   * @returns {string} Resource name string.
   */
  notePath(project: string, note: string) {
    return this.pathTemplates.notePathTemplate.render({
      project: project,
      note: note,
    });
  }

  /**
   * Parse the project from Note resource.
   *
   * @param {string} noteName
   *   A fully-qualified path representing Note resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromNoteName(noteName: string) {
    return this.pathTemplates.notePathTemplate.match(noteName).project;
  }

  /**
   * Parse the note from Note resource.
   *
   * @param {string} noteName
   *   A fully-qualified path representing Note resource.
   * @returns {string} A string representing the note.
   */
  matchNoteFromNoteName(noteName: string) {
    return this.pathTemplates.notePathTemplate.match(noteName).note;
  }

  /**
   * Return a fully-qualified occurrence resource name string.
   *
   * @param {string} project
   * @param {string} occurrence
   * @returns {string} Resource name string.
   */
  occurrencePath(project: string, occurrence: string) {
    return this.pathTemplates.occurrencePathTemplate.render({
      project: project,
      occurrence: occurrence,
    });
  }

  /**
   * Parse the project from Occurrence resource.
   *
   * @param {string} occurrenceName
   *   A fully-qualified path representing Occurrence resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromOccurrenceName(occurrenceName: string) {
    return this.pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .project;
  }

  /**
   * Parse the occurrence from Occurrence resource.
   *
   * @param {string} occurrenceName
   *   A fully-qualified path representing Occurrence resource.
   * @returns {string} A string representing the occurrence.
   */
  matchOccurrenceFromOccurrenceName(occurrenceName: string) {
    return this.pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .occurrence;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.containerAnalysisStub && !this._terminated) {
      return this.containerAnalysisStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }

  /**
   * Returns an instance of a @google-cloud/grafeas client, configured to
   * connect to Google Cloud's Container Analysis API. For documentation
   * on this client, see:
   * <a href="https://googleapis.dev/nodejs/grafeas/latest/index.html">https://googleapis.dev/nodejs/grafeas/latest/index.html</a>
   *
   * @returns {GrafeasClient} - An instance of a Grafeas client.
   *
   */
  getGrafeasClient() {
    return new GrafeasClient(this._opts as {});
  }
}