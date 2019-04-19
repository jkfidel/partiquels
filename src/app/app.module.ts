import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { AppHeaderComponent } from './app-header/app-header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeBodyComponent } from './home-body/home-body.component';
import { WINDOW_PROVIDERS } from "./services/window.service";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeBodyComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
