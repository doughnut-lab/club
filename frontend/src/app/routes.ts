import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CashierComponent } from './user/cashier/cashier.component';
import { CheffComponent } from './user/cheff/cheff.component';
import { ResReservationComponent } from './user/cashier/res-reservation/res-reservation.component';
import { SportsComponent } from './user/cashier/sports/sports.component';
import { TableBookingComponent } from './user/cashier/table-booking/table-booking.component';
import { CustomerIndexComponent } from './user/customer/customer-index/customer-index.component';
import { AboutUsComponent } from './user/customer/about-us/about-us.component';
import { GalleryComponent } from './user/customer/gallery/gallery.component';
import { ReservationComponent } from './user/customer/reservation/reservation.component';
import { MenuComponent } from './user/customer/menu/menu.component';
import { InstructorComponent } from './user/instructor/instructor.component';
import { InsHistoryComponent } from './user/instructor/component/ins-history/ins-history.component';
import { InsAssignDetailsComponent } from './user/instructor/component/ins-assign-details/ins-assign-details.component';

import { InsNotificationComponent } from './user/instructor/component/ins-notification/ins-notification.component';
import { ProfileComponent } from './user/customer/profile/profile.component';


export const appRoutes: Routes = [
    {
        path: 'customer', component: CustomerComponent,
        children: [{ path: '', component: UserComponent }]
    },
    {
        path: 'instructor', component: UserComponent,
        children: [{ path: '', component: InstructorComponent }]
    },
    {
        path: 'history', component: UserComponent,
        children: [{ path: '', component: InsHistoryComponent }]
    },
    {
        path: 'assign', component: UserComponent,
        children: [{ path: '', component: InsAssignDetailsComponent }]
    },
    {
        path: 'login', component: LoginComponent,
        children: [{ path: '', component:  LoginComponent }]
    },
    {
        path: 'cashier', component: CashierComponent
    },
    {
        path: 'cheff', component: CheffComponent
    },
    {
        path: 'customer-index', component: CustomerIndexComponent,
        children: [{ path: '', component: CustomerComponent }]
    },
    {
        path: 'about-us', component: AboutUsComponent
    },
    {
        path: 'gallery', component: GalleryComponent
    },
    {
        path: 'reservation', component: ReservationComponent
    },
    {
        path: 'restaurant-reservation', component: ResReservationComponent
    },
    {
        path: 'sports', component: SportsComponent
    },
    {
        path: 'table-booking', component: TableBookingComponent
    },
    {
        path: 'instructor/notification', component: InsNotificationComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];