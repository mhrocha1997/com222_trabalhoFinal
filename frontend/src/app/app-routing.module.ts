import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './pages/games/games.component';
import { DetailsComponent } from './pages/details/details.component';
import {CreateGameComponent} from './pages/create-game/create-game.component';
const routes: Routes = [
  { path: 'create', component: CreateGameComponent },
  { path: 'details/:name', component: DetailsComponent },
  { path: 'games/:name', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
