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
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';

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
import { BoardComponent } from './board/board.component';
import { ImageComponent } from './image/image.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { DictionaryService } from './dictionary.service';
import { GameDBService } from './gamedb.service';
import { GameComponent } from './game/game.component';
import { StatsComponent } from './stats/stats.component';
import {TreeTableModule} from 'primeng/treetable';
import {OrderListModule} from 'primeng/orderlist';
import {InputNumberModule} from 'primeng/inputnumber';

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
    VerticalCouroselComponent,
    BoardComponent,
    ImageComponent,
    CategoryComponent,
    GameComponent,
    StatsComponent
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
    FormsModule,
    DialogModule,
    CheckboxModule,
    DropdownModule,
    PanelModule,
    DataViewModule,
    RatingModule,
    TreeTableModule,
    OrderListModule,
    InputNumberModule
  ],
  providers: [CategoryService, DictionaryService, GameDBService, PuzzleService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
