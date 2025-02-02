/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FileImport, SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates the file import.
 *
 * @summary Creates the file import.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/fileImports/CreateFileImport.json
 */
async function createAFileImport() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const fileImportId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const fileImport: FileImport = {
    contentType: "StixIndicator",
    importFile: { fileFormat: "JSON", fileName: "myFile.json", fileSize: 4653 },
    ingestionMode: "IngestAnyValidRecords",
    source: "mySource"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.fileImports.create(
    resourceGroupName,
    workspaceName,
    fileImportId,
    fileImport
  );
  console.log(result);
}

createAFileImport().catch(console.error);
