/*
    Copyright (C) 2021 Accurics, Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { RuleResponse } from "../interface/backendMetadata";
import * as regoEditorConfig from "../utils/configuration";
import { BackendClient } from "./backendClient";

export async function fetchAllCustomRules(): Promise<RuleResponse | undefined | void> {

    if (!regoEditorConfig.isBackendConfigValid()) {
        return;
    }

    let targetEnv: string = regoEditorConfig.getTargetEnv();
    let appToken: string = regoEditorConfig.getApplicationToken();

    let backendClient: BackendClient = new BackendClient(targetEnv, appToken);
    return backendClient.getRules();
}
