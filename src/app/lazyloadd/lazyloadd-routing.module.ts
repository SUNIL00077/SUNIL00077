import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloaddComponent } from './lazyloadd.component';
import { ListtComponent } from './listt/listt.component';

const routes: Routes = [{ path: '', component: LazyloaddComponent },
{path:'listt',component:ListtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloaddRoutingModule { }
