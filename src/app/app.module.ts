import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComp/home/home.component';
import { LeftHomeComponent } from './allComp/left-home/left-home.component';
import { CenterHomeComponent } from './allComp/center-home/center-home.component';
import { RightHomeComponent } from './allComp/right-home/right-home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftHomeComponent,
    CenterHomeComponent,
    RightHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
