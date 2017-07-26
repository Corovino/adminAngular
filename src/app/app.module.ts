import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdSidenavModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { AppRouting } from './admin/app-routing/app-routing';
import { TestComponent } from './admin/test/test.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PatientManagementComponent } from './admin/patient-management/patient-management.component';
import { AccessPermitionComponent } from './admin/access-permition/access-permition.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { AsideComponent } from './admin/partials/aside/aside.component';
import { HeaderComponent } from './admin/partials/header/header.component';
import { DescriptionTestComponent } from './admin/modal/description-test/description-test.component';
import { DeleteComponent } from './admin/modal/delete/delete.component';
import { NewLocationComponent } from './admin/modal/new-location/new-location.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsermanagementComponent,
    DashboardComponent,
    PatientManagementComponent,
    AccessPermitionComponent,
    LocationsComponent,
    AsideComponent,
    HeaderComponent,
    DescriptionTestComponent,
    DeleteComponent,
    NewLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    CdkTableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DescriptionTestComponent, DeleteComponent, NewLocationComponent]
})
export class AppModule { }
