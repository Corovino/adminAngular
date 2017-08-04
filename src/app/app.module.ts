import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdSidenavModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { ChartsModule } from 'ng2-charts';
import { Daterangepicker } from 'ng2-daterangepicker';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing/app-routing';

import { AdminComponent } from './admin/admin/admin.component';
import { AsideAdminComponent } from './admin/partials/asideadmin/asideadmin.component';
import { HeaderAdminComponent } from './admin/partials/headeradmin/headeradmin.component';
import { TestinfoComponent } from './admin/test/testinfo/testinfo.component';
import { TestlistComponent } from './admin/test/testlist/testlist.component';
import { UserlistComponent } from './admin/usermanagement/userlist/userlist.component';
import { UserinfoComponent } from './admin/usermanagement/userinfo/userinfo.component';
import { NewuserComponent } from './admin/usermanagement/newuser/newuser.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { DescriptionTestComponent } from './admin/modal/description-test/description-test.component';
import { DeleteComponent } from './admin/modal/delete/delete.component';
import { NewLocationComponent } from './admin/modal/new-location/new-location.component';
import { PermissionlistComponent } from './admin/access-permission/permissionlist/permissionlist.component';
import { NewpermissionComponent } from './admin/access-permission/newpermission/newpermission.component';
import { PatientlistComponent } from './admin/patient-management/patientlist/patientlist.component';
import { PatienttestlistComponent } from './admin/patient-management/patienttestlist/patienttestlist.component';
import { TestlisthistoryComponent } from './admin/testhistory/testlisthistory/testlisthistory.component';

import { UserComponent } from './user/user/user.component';
import { TesthistoryComponent } from './user/testhistory/testhistory.component';
import { AsideuserComponent } from './user/partials/asideuser/asideuser.component';
import { HeaderuserComponent } from './user/partials/headeruser/headeruser.component';
import { PatienttestlistUserComponent } from './user/patient-management/patienttestlist-user/patienttestlist-user.component';
import { PatientlistUserComponent } from './user/patient-management/patientlist-user/patientlist-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AsideAdminComponent,
    HeaderAdminComponent,
    DashboardComponent,
    LocationsComponent,
    DescriptionTestComponent,
    DeleteComponent,
    NewLocationComponent,
    UserlistComponent,
    UserinfoComponent,
    NewuserComponent,
    TestinfoComponent,
    TestlistComponent,
    PermissionlistComponent,
    NewpermissionComponent,
    PatientlistComponent,
    PatienttestlistComponent,
    TestlisthistoryComponent,
    TesthistoryComponent,
    UserComponent,
    AsideuserComponent,
    HeaderuserComponent,
    PatienttestlistUserComponent,
    PatientlistUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    CdkTableModule,
    ChartsModule,
    Daterangepicker,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DescriptionTestComponent, DeleteComponent, NewLocationComponent]
})
export class AppModule { }
