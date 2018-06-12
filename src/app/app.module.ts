//import { Chart } from 'node_modules/chart.js/dist/Chart.js';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {AccordionModule} from 'primeng/accordion';
//import {MenuItem} from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {CalendarModule} from 'primeng/calendar';


import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { MaterialDeptModuleComponent } from './material-dept-module/material-dept-module.component';
import { CreateBillModuleComponent } from './create-bill-module/create-bill-module.component';
import { BOMItemDataModuleComponent } from './bomitem-data-module/bomitem-data-module.component';
import { BOMHeaderDataComponent } from './bomheader-data/bomheader-data.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './header/header.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginModuleComponent,
    MaterialDeptModuleComponent,
    CreateBillModuleComponent,
    BOMItemDataModuleComponent,
    BOMHeaderDataComponent,
    ViewdataComponent,
    ReportsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgDatepickerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
