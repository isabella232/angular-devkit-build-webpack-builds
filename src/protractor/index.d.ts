/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuildEvent, Builder, BuilderContext, Target } from '@angular-devkit/architect';
import { Observable } from 'rxjs/Observable';
export interface ProtractorBuilderOptions {
    protractorConfig: string;
    devServerTarget?: string;
    specs: string[];
    suite?: string;
    elementExplorer: boolean;
    webdriverUpdate: boolean;
    port?: number;
    host: string;
    baseUrl: string;
}
export declare class ProtractorBuilder implements Builder<ProtractorBuilderOptions> {
    context: BuilderContext;
    constructor(context: BuilderContext);
    run(target: Target<ProtractorBuilderOptions>): Observable<BuildEvent>;
    private _startDevServer(options);
    private _updateWebdriver(root);
    private _runProtractor(root, options);
}
export default ProtractorBuilder;
