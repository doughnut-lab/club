import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImageComponent } from './pages/image/image.component';
import { AddInstructorComponent } from './pages/registration/add-instructor/add-instructor.component';
import { AddCheffComponent } from './pages/registration/add-cheff/add-cheff.component';
import { AddCashierComponent } from './pages/registration/add-cashier/add-cashier.component';
// import { AddCustomerComponent } from './pages/registration/';
import { NoInstructorComponent } from './Notification/no-instructor/no-instructor.component';
import { NoCheffComponent } from './Notification/no-cheff/no-cheff.component';
import { NoCashierComponent } from './Notification/no-cashier/no-cashier.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AddreservationComponent } from './pages/reservation/addreservation/addreservation.component';
import { ViewreservationComponent } from './pages/reservation/viewreservation/viewreservation.component';
import { ReservationDetailsComponent } from './pages/reservation/reservation-details/reservation-details.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AsigninstructorComponent } from './pages/asigninstructor/asigninstructor.component';

export const appRoutes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [{ path: '', component: DashboardComponent }]
    },
    {
        path: 'register/instructor', component: AddInstructorComponent
    },
    {
        path: 'register/cheff', component: AddCheffComponent
    },
    {
        path: 'register/cashier', component: AddCashierComponent 
    },
    {
        path: 'image', component: ImageComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'notification/instructor', component: NoInstructorComponent
    },
    {
        path: 'notification/cheff', component: NoCheffComponent
    },
    {
        path: 'notification/cashier', component: NoCashierComponent
    },
    {
        path: 'reservation/addreservation', component: AddreservationComponent
    },
    {
        path: 'reservation/viewreservation', component: ViewreservationComponent
    },
    {
        path: 'reservation/viewreservation-details', component: ReservationDetailsComponent
    },
    {
        path: 'gallery', component: GalleryComponent
    },
    {
        path: 'asigninstructor', component: AsigninstructorComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: '**', component:NotfoundComponent
    }
];