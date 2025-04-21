import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'generos', component: GenerosComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
];