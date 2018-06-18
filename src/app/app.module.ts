import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlcgasModule } from './alcgas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlcgasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
