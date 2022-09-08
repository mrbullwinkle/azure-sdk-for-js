let nock = require('nock');

module.exports.hash = "fbd2ba88a18e588cae3de680faae7c38";

module.exports.testInfo = {"uniqueName":{"share":"share166303425741404631","dir":"dir166303425883500339","dir0":"dir0166303425915909895","dir1":"dir1166303425941107113","dir2":"dir2166303425966305803","file￾ 0":"file￾ 0166303425991409509","file￾ 1":"file￾ 1166303426017202421","file￾ 2":"file￾ 2166303426044108125"},"newDate":{}}

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:38 GMT',
  'ETag',
  '"0x8DA952B564426E3"',
  'x-ms-request-id',
  '897c19d2-e01a-0001-3c14-c71b65000000',
  'x-ms-client-request-id',
  '157f3f40-c4a3-4208-b9d3-6281ecc97383',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:38 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:39 GMT',
  'ETag',
  '"0x8DA952B56778BB9"',
  'x-ms-request-id',
  '897c19d5-e01a-0001-3d14-c71b65000000',
  'x-ms-client-request-id',
  'cd3d0621-827d-4b71-a2c0-437e813afa2c',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:39.3153977Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:39.3153977Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:39.3153977Z',
  'x-ms-file-permission-key',
  '4319988430575558214*13209974753615755271',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:38 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/dir0166303425915909895')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:39 GMT',
  'ETag',
  '"0x8DA952B56A04A1C"',
  'x-ms-request-id',
  '897c19d7-e01a-0001-3e14-c71b65000000',
  'x-ms-client-request-id',
  'cecc1f5e-52ba-44a5-a123-cefe13f7e2f2',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:39.5824156Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:39.5824156Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:39.5824156Z',
  'x-ms-file-permission-key',
  '4319988430575558214*13209974753615755271',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:39 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/dir1166303425941107113')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:39 GMT',
  'ETag',
  '"0x8DA952B56C6BE9E"',
  'x-ms-request-id',
  '897c19d8-e01a-0001-3f14-c71b65000000',
  'x-ms-client-request-id',
  '44487d8d-ee9f-4a2f-bb36-cde5a502158e',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:39.8344350Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:39.8344350Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:39.8344350Z',
  'x-ms-file-permission-key',
  '4319988430575558214*13209974753615755271',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '16140971433240035328',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:39 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/dir2166303425966305803')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:40 GMT',
  'ETag',
  '"0x8DA952B56ED3341"',
  'x-ms-request-id',
  '897c19d9-e01a-0001-4014-c71b65000000',
  'x-ms-client-request-id',
  '5daaad7b-43a4-429b-879b-0d0ca737807d',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:40.0864577Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:40.0864577Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:40.0864577Z',
  'x-ms-file-permission-key',
  '4319988430575558214*13209974753615755271',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '10376363910205800448',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:39 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%200166303425991409509')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:40 GMT',
  'ETag',
  '"0x8DA952B57146AC8"',
  'x-ms-request-id',
  '897c19da-e01a-0001-4114-c71b65000000',
  'x-ms-client-request-id',
  'ff3bdcb3-2c6d-45ca-9618-70eda5d98920',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:40.3434696Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:40.3434696Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:40.3434696Z',
  'x-ms-file-permission-key',
  '6153226917883006817*13209974753615755271',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '14988049928633188352',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:39 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%201166303426017202421')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:40 GMT',
  'ETag',
  '"0x8DA952B573ADF75"',
  'x-ms-request-id',
  '897c19db-e01a-0001-4214-c71b65000000',
  'x-ms-client-request-id',
  'd9f5b0d6-c0ea-4e29-9d58-ed0a8b06e0a8',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:40.5954933Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:40.5954933Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:40.5954933Z',
  'x-ms-file-permission-key',
  '6153226917883006817*13209974753615755271',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '12682206919419494400',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:40 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%202166303426044108125')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Tue, 13 Sep 2022 01:57:40 GMT',
  'ETag',
  '"0x8DA952B5763EBE2"',
  'x-ms-request-id',
  '897c19dc-e01a-0001-4314-c71b65000000',
  'x-ms-client-request-id',
  'b40f83ab-be69-48db-aab5-b759b25b4289',
  'x-ms-version',
  '2021-12-02',
  'x-ms-file-change-time',
  '2022-09-13T01:57:40.8645090Z',
  'x-ms-file-last-write-time',
  '2022-09-13T01:57:40.8645090Z',
  'x-ms-file-creation-time',
  '2022-09-13T01:57:40.8645090Z',
  'x-ms-file-permission-key',
  '6153226917883006817*13209974753615755271',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '17293892937846882304',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 13 Sep 2022 01:57:40 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share166303425741404631/dir166303425883500339')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.preprod.core.windows.net/\" ShareName=\"share166303425741404631\" DirectoryPath=\"dir166303425883500339\"><DirectoryId>13835128424026341376</DirectoryId><Entries><Directory><Name>dir0166303425915909895</Name><FileId>11529285414812647424</FileId><Properties><CreationTime>2022-09-13T01:57:39.5824156Z</CreationTime><LastAccessTime>2022-09-13T01:57:39.5824156Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:39.5824156Z</LastWriteTime><ChangeTime>2022-09-13T01:57:39.5824156Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:39 GMT</Last-Modified><Etag>\"0x8DA952B56A04A1C\"</Etag></Properties><Attributes>Directory</Attributes><PermissionKey>4319988430575558214*13209974753615755271</PermissionKey></Directory><Directory><Name>dir1166303425941107113</Name><FileId>16140971433240035328</FileId><Properties><CreationTime>2022-09-13T01:57:39.8344350Z</CreationTime><LastAccessTime>2022-09-13T01:57:39.8344350Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:39.8344350Z</LastWriteTime><ChangeTime>2022-09-13T01:57:39.8344350Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:39 GMT</Last-Modified><Etag>\"0x8DA952B56C6BE9E\"</Etag></Properties><Attributes>Directory</Attributes><PermissionKey>4319988430575558214*13209974753615755271</PermissionKey></Directory><Directory><Name>dir2166303425966305803</Name><FileId>10376363910205800448</FileId><Properties><CreationTime>2022-09-13T01:57:40.0864577Z</CreationTime><LastAccessTime>2022-09-13T01:57:40.0864577Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:40.0864577Z</LastWriteTime><ChangeTime>2022-09-13T01:57:40.0864577Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:40 GMT</Last-Modified><Etag>\"0x8DA952B56ED3341\"</Etag></Properties><Attributes>Directory</Attributes><PermissionKey>4319988430575558214*13209974753615755271</PermissionKey></Directory><File><Name Encoded=\"true\">file%EF%BF%BE%200166303425991409509</Name><FileId>14988049928633188352</FileId><Properties><Content-Length>1024</Content-Length><CreationTime>2022-09-13T01:57:40.3434696Z</CreationTime><LastAccessTime>2022-09-13T01:57:40.3434696Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:40.3434696Z</LastWriteTime><ChangeTime>2022-09-13T01:57:40.3434696Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:40 GMT</Last-Modified><Etag>\"0x8DA952B57146AC8\"</Etag></Properties><Attributes>Archive</Attributes><PermissionKey>6153226917883006817*13209974753615755271</PermissionKey></File><File><Name Encoded=\"true\">file%EF%BF%BE%201166303426017202421</Name><FileId>12682206919419494400</FileId><Properties><Content-Length>1024</Content-Length><CreationTime>2022-09-13T01:57:40.5954933Z</CreationTime><LastAccessTime>2022-09-13T01:57:40.5954933Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:40.5954933Z</LastWriteTime><ChangeTime>2022-09-13T01:57:40.5954933Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:40 GMT</Last-Modified><Etag>\"0x8DA952B573ADF75\"</Etag></Properties><Attributes>Archive</Attributes><PermissionKey>6153226917883006817*13209974753615755271</PermissionKey></File><File><Name Encoded=\"true\">file%EF%BF%BE%202166303426044108125</Name><FileId>17293892937846882304</FileId><Properties><Content-Length>1024</Content-Length><CreationTime>2022-09-13T01:57:40.8645090Z</CreationTime><LastAccessTime>2022-09-13T01:57:40.8645090Z</LastAccessTime><LastWriteTime>2022-09-13T01:57:40.8645090Z</LastWriteTime><ChangeTime>2022-09-13T01:57:40.8645090Z</ChangeTime><Last-Modified>Tue, 13 Sep 2022 01:57:40 GMT</Last-Modified><Etag>\"0x8DA952B5763EBE2\"</Etag></Properties><Attributes>Archive</Attributes><PermissionKey>6153226917883006817*13209974753615755271</PermissionKey></File></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '897c19dd-e01a-0001-4414-c71b65000000',
  'x-ms-client-request-id',
  'e0a77d10-5a00-4e74-a8f3-6f83b5911a0a',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:40 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%200166303425991409509')
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19de-e01a-0001-4514-c71b65000000',
  'x-ms-client-request-id',
  'b55a8e0a-88de-44d9-ae3c-8ab649d104b6',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:40 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%201166303426017202421')
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19df-e01a-0001-4614-c71b65000000',
  'x-ms-client-request-id',
  '277c5625-787b-47ff-8973-1918d3268d75',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:41 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/file%EF%BF%BE%202166303426044108125')
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19e0-e01a-0001-4714-c71b65000000',
  'x-ms-client-request-id',
  '89905a20-952d-4693-902f-79e6abdbe5d7',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:41 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/dir0166303425915909895')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19e1-e01a-0001-4814-c71b65000000',
  'x-ms-client-request-id',
  '4c36470a-8a6d-489d-ad7c-5a1011622904',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:41 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/dir1166303425941107113')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19e2-e01a-0001-4914-c71b65000000',
  'x-ms-client-request-id',
  '0c320c07-c2ef-4428-8ace-a96d86115538',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:41 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631/dir166303425883500339/dir2166303425966305803')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19e3-e01a-0001-4a14-c71b65000000',
  'x-ms-client-request-id',
  '4f0e88df-ae82-42eb-96e3-9eb52cd63dc8',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:42 GMT'
]);

nock('https://fakestorageaccount.file.preprod.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share166303425741404631')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '897c19e4-e01a-0001-4b14-c71b65000000',
  'x-ms-client-request-id',
  '52f60194-720c-4a2e-8fa0-b6fa0eac27ab',
  'x-ms-version',
  '2021-12-02',
  'Date',
  'Tue, 13 Sep 2022 01:57:42 GMT'
]);
