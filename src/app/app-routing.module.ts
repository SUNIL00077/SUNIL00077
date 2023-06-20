import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
{path:'lazyload',loadChildren:() =>import('./lazyload/lazyload.module').then(p => p.LazyloadModule)},
  { path: 'lazyloadd', loadChildren: () => import('./lazyloadd/lazyloadd.module').then(m => m.LazyloaddModule) },
  {path:'lazyloadd',loadChildren:() =>import('./lazyloadd/lazyloadd.module').then(l =>l.LazyloaddModule)}
//  {path:'',component:HomeComponent},
// {path:'login', component:LoginComponent},
// {path:'home', component:HomeComponent},
// {path:'products',component:ProductsComponent,
// children:[
//   {path:'laptop',component:LaptopComponent},
//   {path:'mobile',component:MobileComponent}
// ]
// },
// {path:'**',component:NopageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
