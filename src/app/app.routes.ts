import { Routes } from '@angular/router';
import { Libros } from './features/libros/libros';

export const routes: Routes = [
    { path: '', redirectTo: 'libros', pathMatch: 'full' },
    {path:'libros', component:Libros}
];
