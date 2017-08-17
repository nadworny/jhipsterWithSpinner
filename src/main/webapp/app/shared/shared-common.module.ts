import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    JhipsterNgLightningSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JhipsterNgLightningSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        JhipsterNgLightningSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class JhipsterNgLightningSharedCommonModule {}
