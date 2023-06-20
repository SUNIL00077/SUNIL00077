import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { DatabindComponent } from './databind/databind.component';
import { HooksComponent } from './hooks/hooks.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { PipesPipe } from './pipess/pipes.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { UserComponent } from './user/user.component';
import { ApiComponent } from './api/api.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CustomPipe } from './pipess/custom.pipe';
import { CpipePipe } from './pipess/cpipe.pipe';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import { ArrayformComponent } from './arrayform/arrayform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectivesComponent,
    ChildComponent,
    DatabindComponent,
    HooksComponent,
    HomeComponent,
    NopageComponent,
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    PipesPipe,
    PipesComponent,
    UserComponent,
    ApiComponent,
    CustomPipe,
    CpipePipe,
    CustomvalidationComponent,
    ArrayformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
