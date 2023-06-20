import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadComponent } from './lazyload.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LazyloadComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyloadRoutingModule
  ]
})
export class LazyloadModule { }
