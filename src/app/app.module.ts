import { route } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { WelcomeComponent } from './welcome/welcome.component';
import { BodyComponent } from './body/body.component';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { Photos1Component } from './photos1/photos1.component';
import { Photos2Component } from './photos2/photos2.component';
import { Photos3Component } from './photos3/photos3.component';
import { Photos4Component } from './photos4/photos4.component';
import { Photos5Component } from './photos5/photos5.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BodyComponent,
    AboutmeComponent,
    Photos1Component,
    Photos2Component,
    Photos3Component,
    Photos4Component,
    Photos5Component,
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,route,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
