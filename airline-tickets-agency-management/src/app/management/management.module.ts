import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ReportComponent } from './component/report/report.component';
import { HomeComponent } from '../client/component/home/home.component';
import { ManagementComponent } from './management/management.component';
import {AppModule} from '../app.module';
import {CommonClientModule} from '../common/common-client/common-client.module';
import { CustomerComponent } from './component/customer/customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateCustomerComponent } from './component/ business/create-customer/create-customer.component';
import { EditCustomerComponent } from './component/ business/edit-customer/edit-customer.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        ManagementRoutingModule,
        CommonClientModule,
        ToastrModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
  declarations: [ReportComponent, HomeComponent, ManagementComponent, CustomerComponent, DeleteCustomerComponent, CreateCustomerComponent, EditCustomerComponent],
  bootstrap: [ManagementComponent]
})
export class ManagementModule { }
