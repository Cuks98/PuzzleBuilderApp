import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BuildPuzzleComponent } from './build-puzzle/build-puzzle.component';
import { PlayPuzzleComponent } from './play-puzzle/play-puzzle.component';
import { BrowsePuzzleComponent } from './browse-puzzle/browse-puzzle.component';
import { CouroselComponent } from './courosel/courosel.component';
import { PuzzleService } from './puzzleService';
import { Courosel2Component } from './courosel2/courosel2.component';
import { FormsModule } from '@angular/forms';
import { VerticalCouroselComponent } from './vertical-courosel/vertical-courosel.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    AboutComponent,
    WelcomeComponent,
    NavigationComponent,
    FooterComponent,
    BuildPuzzleComponent,
    PlayPuzzleComponent,
    BrowsePuzzleComponent,
    CouroselComponent,
    Courosel2Component,
    VerticalCouroselComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    FormsModule
  ],
  providers: [PuzzleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
