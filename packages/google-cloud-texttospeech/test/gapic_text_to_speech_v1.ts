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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as texttospeechModule from '../src';

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

describe('v1.TextToSpeechClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath = texttospeechModule.v1.TextToSpeechClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint = texttospeechModule.v1.TextToSpeechClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = texttospeechModule.v1.TextToSpeechClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new texttospeechModule.v1.TextToSpeechClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.textToSpeechStub, undefined);
      await client.initialize();
      assert(client.textToSpeechStub);
    });

    it('has close method for the initialized client', done => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.textToSpeechStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.textToSpeechStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new texttospeechModule.v1.TextToSpeechClient({
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
      const client = new texttospeechModule.v1.TextToSpeechClient({
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

  describe('listVoices', () => {
    it('invokes listVoices without error', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesResponse()
      );
      client.innerApiCalls.listVoices = stubSimpleCall(expectedResponse);
      const [response] = await client.listVoices(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes listVoices without error using callback', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesResponse()
      );
      client.innerApiCalls.listVoices =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listVoices(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.texttospeech.v1.IListVoicesResponse | null
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
    });

    it('invokes listVoices with error', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.listVoices = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listVoices(request), expectedError);
    });

    it('invokes listVoices with closed client', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.ListVoicesRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.listVoices(request), expectedError);
    });
  });

  describe('synthesizeSpeech', () => {
    it('invokes synthesizeSpeech without error', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechResponse()
      );
      client.innerApiCalls.synthesizeSpeech = stubSimpleCall(expectedResponse);
      const [response] = await client.synthesizeSpeech(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes synthesizeSpeech without error using callback', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechResponse()
      );
      client.innerApiCalls.synthesizeSpeech =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.synthesizeSpeech(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechResponse | null
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
    });

    it('invokes synthesizeSpeech with error', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.synthesizeSpeech = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.synthesizeSpeech(request), expectedError);
    });

    it('invokes synthesizeSpeech with closed client', async () => {
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeSpeechRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.synthesizeSpeech(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('model', () => {
      const fakePath = '/rendered/path/model';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        model: 'modelValue',
      };
      const client = new texttospeechModule.v1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.modelPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.modelPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('modelPath', () => {
        const result = client.modelPath(
          'projectValue',
          'locationValue',
          'modelValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.modelPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromModelName', () => {
        const result = client.matchProjectFromModelName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.modelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromModelName', () => {
        const result = client.matchLocationFromModelName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.modelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchModelFromModelName', () => {
        const result = client.matchModelFromModelName(fakePath);
        assert.strictEqual(result, 'modelValue');
        assert(
          (client.pathTemplates.modelPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});