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
import { ComponentsComponent } from './pages/components/components.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { BreadcrumbComponent } from './pages/components/breadcrumb/breadcrumb.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';



import { AssignInstructorComponent } from './assign_details/assign-instructor/assign-instructor.component';
import { AddInstructorComponent } from './Registration/add-instructor/add-instructor.component';
import { AddCheffComponent } from './Registration/add-cheff/add-cheff.component';
import { AddCashierComponent } from './Registration/add-cashier/add-cashier.component';
import { InsSideBarComponent } from './Registration/add-instructor/component/ins-side-bar/ins-side-bar.component';
import { NoInstructorComponent } from './Notification/no-instructor/no-instructor.component';
import { NoCheffComponent } from './Notification/no-cheff/no-cheff.component';
import { NoCashierComponent } from './Notification/no-cashier/no-cashier.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    ImageComponent,
    DashboardComponent,
    ComponentsComponent,
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
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
