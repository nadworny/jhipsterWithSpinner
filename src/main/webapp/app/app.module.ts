import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterNgLightningSharedModule, UserRouteAccessService } from './shared';
import { JhipsterNgLightningHomeModule } from './home/home.module';
import { JhipsterNgLightningAdminModule } from './admin/admin.module';
import { JhipsterNgLightningAccountModule } from './account/account.module';
import { JhipsterNgLightningEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterNgLightningSharedModule,
        JhipsterNgLightningHomeModule,
        JhipsterNgLightningAdminModule,
        JhipsterNgLightningAccountModule,
        JhipsterNgLightningEntityModule,
        Ng4LoadingSpinnerModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterNgLightningAppModule {}
