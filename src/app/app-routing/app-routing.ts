import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardAdminComponent } from '../admin/dashboard-admin/dashboard-admin.component';
import { LocationsComponent } from '../admin/locations/locations.component';
import { UserlistComponent } from '../admin/usermanagement/userlist/userlist.component';
import { UserinfoComponent } from '../admin/usermanagement/userinfo/userinfo.component';
import { NewuserComponent } from '../admin/usermanagement/newuser/newuser.component';
import { TestinfoComponent } from '../admin/test/testinfo/testinfo.component';
import { TestlistComponent } from '../admin/test/testlist/testlist.component';
import { PermissionlistComponent } from '../admin/access-permission/permissionlist/permissionlist.component';
import { NewpermissionComponent } from '../admin/access-permission/newpermission/newpermission.component';
import { PatientlistComponent } from '../admin/patient-management/patientlist/patientlist.component';
import { PatienttestlistComponent } from '../admin/patient-management/patienttestlist/patienttestlist.component';
import { TestlisthistoryComponent } from '../admin/testhistory/testlisthistory/testlisthistory.component';

import { UserComponent } from '../user/user/user.component';
import { DashboardUserComponent } from '../user/dashboard-user/dashboard-user.component';
import { TestListRepositoryComponent } from '../user/testrepository/test-list-repository/test-list-repository.component';
import { TestPacientRepositoryComponent } from '../user/testrepository/test-pacient-repository/test-pacient-repository.component';
import { TesthistoryComponent } from '../user/testhistory/testhistory.component';
import { PatienttestlistUserComponent } from '../user/patient-management/patienttestlist-user/patienttestlist-user.component';
import { PatientlistUserComponent } from '../user/patient-management/patientlist-user/patientlist-user.component';

const routes: Routes = [
  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboardAdmin', component: DashboardAdminComponent },
      { path: 'test', component: TestlistComponent },
      { path: 'usersManagement', component: UserlistComponent },
      { path: 'patientManagement', component: PatientlistComponent },
      { path: 'patientManagement/patienttestlist', component: PatienttestlistComponent },
      { path: 'accessPermission', component: PermissionlistComponent },
      { path: 'accessPermission/newpermission', component: NewpermissionComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'usersManagement/userinfo', component: UserinfoComponent },
      { path: 'usersManagement/newuser', component: NewuserComponent },
      { path: 'test/testinfo', component: TestinfoComponent },
      { path: 'testhistory', component: TestlisthistoryComponent }
    ]
  },
  { path: 'user',
    component: UserComponent,
    children: [
      { path: 'dashboardUser', component: DashboardUserComponent },
      { path: 'testrepository', component: TestListRepositoryComponent },
      { path: 'testpacient', component: TestPacientRepositoryComponent },
      { path: 'testhistory', component: TesthistoryComponent },
      { path: 'patientManagement', component: PatientlistUserComponent },
      { path: 'patientManagement/PatienttestlistUser', component: PatienttestlistUserComponent }
    ]
  },
  { path: 'login',
    component: LoginComponent
  }
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
