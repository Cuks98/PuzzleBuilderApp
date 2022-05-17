import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowsePuzzleComponent } from './browse-puzzle/browse-puzzle.component';
import { BuildPuzzleComponent } from './build-puzzle/build-puzzle.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { PlayPuzzleComponent } from './play-puzzle/play-puzzle.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'play', component: GameComponent},
  {path: 'about', component: AboutComponent},
  {path: 'make', component: BuildPuzzleComponent},
  {path: 'browse', component: BrowsePuzzleComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'cart', component: ShopComponent},
  {path: '**', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
