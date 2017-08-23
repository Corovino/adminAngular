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
import { ImageUploadModule } from 'angular2-image-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing/app-routing';

import { DescriptionTestComponent } from './modal/description-test/description-test.component';
import { DeleteComponent } from './modal/delete/delete.component';
import { NewLocationComponent } from './modal/new-location/new-location.component';
import { SearchpatientComponent } from './modal/searchpatient/searchpatient.component';
import { SelecttestComponent } from './modal/selecttest/selecttest.component';
import { PatientscoreComponent } from './modal/patientscore/patientscore.component';
import { TestComponent } from './modal/test/test.component';
import { NewpatientComponent } from './modal/newpatient/newpatient.component';
import { AlertsComponent } from './modal/alerts/alerts.component';
import { ResetpasswordComponent } from './modal/resetpassword/resetpassword.component';

import { LoginComponent } from './login/login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';

import { AdminComponent } from './admin/admin/admin.component';
import { AsideAdminComponent } from './admin/partials/asideadmin/asideadmin.component';
import { HeaderAdminComponent } from './admin/partials/headeradmin/headeradmin.component';
import { SearchComponent } from './admin/search/search.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { TestinfoComponent } from './admin/test/testinfo/testinfo.component';
import { TestlistComponent } from './admin/test/testlist/testlist.component';
import { UserlistComponent } from './admin/usermanagement/userlist/userlist.component';
import { UserinfoComponent } from './admin/usermanagement/userinfo/userinfo.component';
import { NewuserComponent } from './admin/usermanagement/newuser/newuser.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { PermissionlistComponent } from './admin/access-permission/permissionlist/permissionlist.component';
import { NewpermissionComponent } from './admin/access-permission/newpermission/newpermission.component';
import { PatientlistComponent } from './admin/patient-management/patientlist/patientlist.component';
import { PatienttestlistComponent } from './admin/patient-management/patienttestlist/patienttestlist.component';
import { TestlisthistoryComponent } from './admin/testhistory/testlisthistory/testlisthistory.component';
import { NewtestComponent } from './admin/test/newtest/newtest.component';
import { ScoreComponent } from './admin/patient-management/score/score.component';

import { UserComponent } from './user/user/user.component';
import { AsideuserComponent } from './user/partials/asideuser/asideuser.component';
import { HeaderuserComponent } from './user/partials/headeruser/headeruser.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { DashboardUser2Component } from './user/dashboard-user2/dashboard-user2.component';
import { TesthistoryComponent } from './user/testhistory/testhistory.component';
import { PatienttestlistUserComponent } from './user/patient-management/patienttestlist-user/patienttestlist-user.component';
import { PatientlistUserComponent } from './user/patient-management/patientlist-user/patientlist-user.component';
import { TestListRepositoryComponent } from './user/testrepository/test-list-repository/test-list-repository.component';
import { TestPacientRepositoryComponent } from './user/testrepository/test-pacient-repository/test-pacient-repository.component';
import { ScorepatientComponent } from './user/patient-management/scorepatient/scorepatient.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { TestlistblankComponent } from './user/patient-management/testlistblank/testlistblank.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AsideAdminComponent,
    HeaderAdminComponent,
    DashboardAdminComponent,
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
    DashboardUserComponent,
    DashboardUser2Component,
    AsideuserComponent,
    HeaderuserComponent,
    PatienttestlistUserComponent,
    PatientlistUserComponent,
    TestListRepositoryComponent,
    TestPacientRepositoryComponent,
    SelecttestComponent,
    PatientscoreComponent,
    TestComponent,
    NewpatientComponent,
    LoginComponent,
    AlertsComponent,
    ScoreComponent,
    ScorepatientComponent,
    NewtestComponent,
    SearchComponent,
    SearchUserComponent,
    ForgotpasswordComponent,
    SearchpatientComponent,
    ResetpasswordComponent,
    TestlistblankComponent
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
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DescriptionTestComponent,
    DeleteComponent,
    NewLocationComponent,
    SelecttestComponent,
    PatientscoreComponent,
    TestComponent,
    NewpatientComponent,
    SearchpatientComponent,
    ResetpasswordComponent
  ]
})
export class AppModule { }
