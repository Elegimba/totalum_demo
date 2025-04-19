import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main' },
    { path: 'main', component: MainComponent },
    { path: 'products', component: ProductsComponent },
    { path: '**', redirectTo: '/main' }
];
