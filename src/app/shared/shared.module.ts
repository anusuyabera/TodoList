import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadComponent } from './components/page-head/page-head.component';


@NgModule({
  declarations: [
    PageHeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageHeadComponent
  ]
})
export class SharedModule { }
