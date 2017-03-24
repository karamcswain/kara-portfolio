import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "ui-router-ng2";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './web/web.component';
import { PhotographyComponent } from './photography/photography.component';
import { FooterComponent } from './footer/footer.component';

/** States */
let root = { name: 'root', url: '/',  component: HomeComponent };
let home = { name: 'home', url: '/home',  component: HomeComponent };
let about = { name: 'about', url: '/about',  component: AboutComponent };
let web = { name: 'web', url: '/webdesign',  component: WebComponent };
let photography = { name: 'photography', url: '/photography',  component: PhotographyComponent };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WebComponent,
    PhotographyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    UIRouterModule.forRoot({ states: [ root, home, about, web, photography] })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
