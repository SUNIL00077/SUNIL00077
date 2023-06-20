import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloaddRoutingModule } from './lazyloadd-routing.module';
import { LazyloaddComponent } from './lazyloadd.component';
import { ListtComponent } from './listt/listt.component';


@NgModule({
  declarations: [
    LazyloaddComponent,
    ListtComponent
  ],
  imports: [
    CommonModule,
    LazyloaddRoutingModule
  ]
})
export class LazyloaddModule { }
