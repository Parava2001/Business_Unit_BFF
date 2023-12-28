import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SearchBusinessUnitComponent } from './search-business-unit/search-business-unit.component';
import { AddBusinessUnitComponent } from './add-business-unit/add-business-unit.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CustomerComponent,
    BusinessUnitComponent,
    HomeComponent,
    CustomerFormComponent,
    SearchBusinessUnitComponent,
    AddBusinessUnitComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToggleButtonModule,
    RouterModule.forRoot([
      { path : 'customer' , component : CustomerComponent}, 
      { path : 'business',  component : BusinessUnitComponent},
      {  path :'home' ,       component : HomeComponent},
     {path: '**', redirectTo: 'home', pathMatch:'full'}
      
    ]),
       ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
