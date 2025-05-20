import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'generos', component: GenerosComponent, canActivate: [AuthGuard] },
    { path: 'peliculas', component: PeliculasComponent, canActivate: [AuthGuard] },
    { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
    { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
  ];