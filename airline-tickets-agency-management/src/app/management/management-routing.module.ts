import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReportComponent} from './component/report/report.component';
import {ManagementComponent} from './management/management.component';
import {EmployeeComponent} from './component/employee/employee.component';


const routes: Routes = [
  {
    path: '', component: ManagementComponent,
    children:
      [
        {
          path: 'report', component: ReportComponent
        },
        {
          path: 'employee', component: EmployeeComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {
}
