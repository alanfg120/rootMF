import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmpyComponent } from './empy/empy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
