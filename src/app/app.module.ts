import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaService } from './shared/services/formula.service';
import { LoginService } from './shared/services/login.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule, // => CommonModule + additional Main Module Functions
    AppRoutingModule // => Routing Mechanism of this module
  ],
  providers: [
    LoginService,
    FormulaService
  ], // => for storing services
  bootstrap: [AppComponent] // => Launch point function of the application
})
export class AppModule { }