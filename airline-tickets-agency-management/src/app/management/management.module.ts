import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ReportComponent } from './component/report/report.component';

import { ManagementComponent } from './management/management.component';
import {AppModule} from '../app.module';
import {CommonClientModule} from '../common/common-client/common-client.module';
import {HomeComponent} from '../client/component/home/home.component';

import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ManagementRoutingModule,
        CommonClientModule,
        FormsModule,
    ],
  declarations: [ReportComponent , ManagementComponent],
  bootstrap: [ManagementComponent]
})
export class ManagementModule { }
