import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from '../test/test.component';
import { UsermanagementComponent } from '../usermanagement/usermanagement.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientManagementComponent } from '../patient-management/patient-management.component';
import { AccessPermitionComponent } from '../access-permition/access-permition.component';
import { LocationsComponent } from '../locations/locations.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'usersManagement', component: UsermanagementComponent },
  { path: 'patientManagement', component: PatientManagementComponent },
  { path: 'accessPermission', component: AccessPermitionComponent },
  { path: 'locations', component: LocationsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRouting {

}
