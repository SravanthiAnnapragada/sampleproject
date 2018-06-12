import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bomheader-data',
  templateUrl: './bomheader-data.component.html',
  styleUrls: ['./bomheader-data.component.css']
})
export class BOMHeaderDataComponent implements OnInit {
 
  headerdata = {
    bomtext: '',
    alttext: '',
    baseqty: '',
    uom: ''
     
  }
  constructor() { }

  ngOnInit() {
  }


  onSubmit(value:any){
    this.headerdata.bomtext =value.bomtext;
    this.headerdata.alttext = value.alttext;
    this.headerdata.baseqty= value.baseqty;
    this.headerdata.uom= value.uom;
    
    console.log(this.headerdata);

  }
}
