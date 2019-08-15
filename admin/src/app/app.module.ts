import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ImageComponent } from './pages/image/image.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { DialogOverviewExampleDialog } from './pages/reservation/viewreservation/viewreservation.component';

import { 
          MatButtonModule, 
          MatCheckboxModule,
          MatDialogModule,
          MatFormFieldModule
        } from '@angular/material';
import { AssignInstructorComponent } from './assign_details/assign-instructor/assign-instructor.component';
import { AddInstructorComponent } from './pages/registration/add-instructor/add-instructor.component';
import { AddCheffComponent } from './pages/registration/add-cheff/add-cheff.component';
import { AddCashierComponent } from './pages/registration/add-cashier/add-cashier.component';
import { InsSideBarComponent } from './pages/registration/add-instructor/component/ins-side-bar/ins-side-bar.component';
import { NoInstructorComponent } from './Notification/no-instructor/no-instructor.component';
import { NoCheffComponent } from './Notification/no-cheff/no-cheff.component';
import { NoCashierComponent } from './Notification/no-cashier/no-cashier.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AddreservationComponent } from './pages/reservation/addreservation/addreservation.component';
import { ViewreservationComponent } from './pages/reservation/viewreservation/viewreservation.component';
import { AsigninstructorComponent } from './pages/asigninstructor/asigninstructor.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SalaryComponent } from './pages/salary/salary.component';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPaginationModule} from 'ngx-pagination';
import { ReservationDetailsComponent } from './pages/reservation/reservation-details/reservation-details.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    ImageComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    AssignInstructorComponent,
    AddInstructorComponent,
    AddCheffComponent,
    AddCashierComponent,
    InsSideBarComponent,
    NoInstructorComponent,
    NoCheffComponent,
    NoCashierComponent,
    NotfoundComponent,
    AddreservationComponent,
    ViewreservationComponent,
    AsigninstructorComponent,
    GalleryComponent,
    SalaryComponent,
    ReservationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule,
    SweetAlert2Module,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ReservationDetailsComponent,
  ],
})
export class AppModule { }
export class PizzaPartyAppModule { }
