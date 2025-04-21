import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main' },
    { path: 'main', component: MainComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '**', redirectTo: '/main' }
];
