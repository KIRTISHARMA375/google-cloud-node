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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as sqltranslationserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v2alpha.SqlTranslationServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient
          .servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient
          .apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port =
        sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          fallback: true,
        });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.sqlTranslationServiceStub, undefined);
      await client.initialize();
      assert(client.sqlTranslationServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      assert(client.sqlTranslationServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.sqlTranslationServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('translateQuery', () => {
    it('invokes translateQuery without error', async () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse()
      );
      client.innerApiCalls.translateQuery = stubSimpleCall(expectedResponse);
      const [response] = await client.translateQuery(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateQuery without error using callback', async () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse()
      );
      client.innerApiCalls.translateQuery =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.translateQuery(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.bigquery.migration.v2alpha.ITranslateQueryResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateQuery with error', async () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.translateQuery = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.translateQuery(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.translateQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes translateQuery with closed client', async () => {
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.translateQuery(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('migrationSubtask', () => {
      const fakePath = '/rendered/path/migrationSubtask';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        workflow: 'workflowValue',
        subtask: 'subtaskValue',
      };
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.migrationSubtaskPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.migrationSubtaskPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('migrationSubtaskPath', () => {
        const result = client.migrationSubtaskPath(
          'projectValue',
          'locationValue',
          'workflowValue',
          'subtaskValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.migrationSubtaskPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromMigrationSubtaskName', () => {
        const result = client.matchProjectFromMigrationSubtaskName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.migrationSubtaskPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromMigrationSubtaskName', () => {
        const result = client.matchLocationFromMigrationSubtaskName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.migrationSubtaskPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchWorkflowFromMigrationSubtaskName', () => {
        const result = client.matchWorkflowFromMigrationSubtaskName(fakePath);
        assert.strictEqual(result, 'workflowValue');
        assert(
          (client.pathTemplates.migrationSubtaskPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSubtaskFromMigrationSubtaskName', () => {
        const result = client.matchSubtaskFromMigrationSubtaskName(fakePath);
        assert.strictEqual(result, 'subtaskValue');
        assert(
          (client.pathTemplates.migrationSubtaskPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('migrationWorkflow', () => {
      const fakePath = '/rendered/path/migrationWorkflow';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        workflow: 'workflowValue',
      };
      const client =
        new sqltranslationserviceModule.v2alpha.SqlTranslationServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.migrationWorkflowPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.migrationWorkflowPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('migrationWorkflowPath', () => {
        const result = client.migrationWorkflowPath(
          'projectValue',
          'locationValue',
          'workflowValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.migrationWorkflowPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromMigrationWorkflowName', () => {
        const result = client.matchProjectFromMigrationWorkflowName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.migrationWorkflowPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromMigrationWorkflowName', () => {
        const result = client.matchLocationFromMigrationWorkflowName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates.migrationWorkflowPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchWorkflowFromMigrationWorkflowName', () => {
        const result = client.matchWorkflowFromMigrationWorkflowName(fakePath);
        assert.strictEqual(result, 'workflowValue');
        assert(
          (
            client.pathTemplates.migrationWorkflowPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});