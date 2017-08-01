import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LocationsComponent } from '../locations/locations.component';
import { UserlistComponent } from '../usermanagement/userlist/userlist.component';
import { UserinfoComponent } from '../usermanagement/userinfo/userinfo.component';
import { NewuserComponent } from '../usermanagement/newuser/newuser.component';
import { TestinfoComponent } from '../test/testinfo/testinfo.component';
import { TestlistComponent } from '../test/testlist/testlist.component';
import { PermitionlistComponent } from '../access-permition/permitionlist/permitionlist.component';
import { NewpermitionComponent } from '../access-permition/newpermition/newpermition.component';
import { PatientlistComponent } from '../patient-management/patientlist/patientlist.component';
import { PatienttestlistComponent } from '../patient-management/patienttestlist/patienttestlist.component';

const routes: Routes = [
  { path: 'test', component: TestlistComponent },
  { path: 'usersManagement', component: UserlistComponent },
  { path: 'patientManagement', component: PatientlistComponent },
  { path: 'patientManagement/patienttestlist', component: PatienttestlistComponent },
  { path: 'accessPermission', component: PermitionlistComponent },
  { path: 'accessPermission/newpermition', component: NewpermitionComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'usersManagement/userinfo', component: UserinfoComponent },
  { path: 'usersManagement/newuser', component: NewuserComponent },
  { path: 'test/testinfo', component: TestinfoComponent }
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
