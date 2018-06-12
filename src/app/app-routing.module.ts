import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModuleComponent } from './login-module/login-module.component';
import { MaterialDeptModuleComponent } from './material-dept-module/material-dept-module.component';
import { CreateBillModuleComponent } from './create-bill-module/create-bill-module.component';
import { BOMItemDataModuleComponent } from './bomitem-data-module/bomitem-data-module.component';
import { BOMHeaderDataComponent } from './bomheader-data/bomheader-data.component';
import {ViewdataComponent} from './viewdata/viewdata.component';
import {ReportsComponent} from './reports/reports.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', component: LoginModuleComponent },
  { path: 'material', component: MaterialDeptModuleComponent },
  {path: 'create_bill', component:CreateBillModuleComponent},
  {path:'fill_item_data', component:BOMItemDataModuleComponent},
  {path:'header_data', component:BOMHeaderDataComponent},
  {path:'app-viewdata', component:ViewdataComponent},
  {path:'reports', component:ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }



