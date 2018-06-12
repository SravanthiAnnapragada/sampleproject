import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
 

@Component({
  selector: 'app-bomitem-data-module',
  templateUrl: './bomitem-data-module.component.html',
  styleUrls: ['./bomitem-data-module.component.css']
})
export class BOMItemDataModuleComponent implements OnInit {
  
  options: DatepickerOptions = {
     minYear: 2018,
     maxYear: 2019,
    // displayFormat: 'MMM D[,] YYYY',
    // barTitleFormat: 'MMMM YYYY',
    // dayNamesFormat: 'dd',
    // firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: enLocale,
   // minDate: new Date(Date.now()), // Minimal selectable date
   // maxDate: new Date(Date.now()),  // Maximal selectable date
  //   barTitleIfEmpty: 'Click to select a date'
  };

  itemdata = {
    itemno: '',
    Component: '',
    cdesc: '',
    qty: '',
    uom: '',
    expirydate: ''
    };
  constructor() { }

  ngOnInit() {
  }

  
  onSubmit(value:any){
    this.itemdata.itemno =value.itemno;
    this.itemdata.Component = value.Component;
    this.itemdata.cdesc= value.cdesc;
    this.itemdata.qty= value.qty;
    this.itemdata.uom= value.uom;
    this.itemdata.expirydate= value.expirydate;
   
    //console.log(value);
    console.log(this.itemdata);
    
    
   
  }

}
