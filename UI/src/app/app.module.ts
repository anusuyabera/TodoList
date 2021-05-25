import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule, // => CommonModule + additional Main Module Functions
    AppRoutingModule // => Routing Mechanism of this module
  ],
  providers: [], // => for storing services
  bootstrap: [AppComponent] // => Launch point function of the application
})
export class AppModule { }