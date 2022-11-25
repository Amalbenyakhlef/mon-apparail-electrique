import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // importer automatiquement
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';

@NgModule({
  declarations: [AppComponent, AppareilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for Two-way-binding pour utilier ngModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
