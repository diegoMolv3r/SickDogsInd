import { Routes } from '@angular/router';

import { DetalleProductoComponent } from './detalle-producto/detalle-producto';
import { HomeComponent } from './home/home';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'producto/:id', component: DetalleProductoComponent }
];
