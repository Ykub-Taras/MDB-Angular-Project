import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesModule} from "./movies/movies.module";
import {HttpClientModule} from "@angular/common/http";
import {NgMetro4Module} from "ng-metro4";
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {AuthorizedUserComponent} from './authorized-user/authorized-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MATERIAL_SANITY_CHECKS} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AuthorizedUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    HttpClientModule,
    NgMetro4Module,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [{
    provide: MATERIAL_SANITY_CHECKS,
    useValue: false
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
