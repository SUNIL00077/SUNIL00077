import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';
import { ListComponent } from './list/list.component';
console.log('lazyload module works')
const routes: Routes = [{ path: '',component:LazyloadComponent },
{path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
