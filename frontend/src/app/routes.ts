import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CashierComponent } from './user/cashier/cashier.component';
import { ResReservationComponent } from './user/cashier/res-reservation/res-reservation.component';
import { SportsComponent } from './user/cashier/sports/sports.component';
import { TableBookingComponent } from './user/cashier/table-booking/table-booking.component';
import { CustomerIndexComponent } from './user/customer/customer-index/customer-index.component';
import { AboutUsComponent } from './user/customer/about-us/about-us.component';
import { GalleryComponent } from './user/customer/gallery/gallery.component';
import { ReservationComponent } from './user/customer/reservation/reservation.component';
import { MenuComponent } from './user/customer/menu/menu.component';

export const appRoutes: Routes = [
    {
        path: 'customer', component: UserComponent,
        children: [{ path: '', component: CustomerComponent }]
    },
    {
        path: 'login', component: LoginComponent
       
    },
    {
        path: 'cashier', component: CashierComponent
    },
    {
        path: 'customer-index', component: CustomerIndexComponent
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
        path: 'menu', component: MenuComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
       
    }
];