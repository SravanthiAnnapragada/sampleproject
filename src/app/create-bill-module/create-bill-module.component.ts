import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bill-module',
  templateUrl: './create-bill-module.component.html',
  styleUrls: ['./create-bill-module.component.css']
})
export class CreateBillModuleComponent implements OnInit {

  createBillModel: any;
  constructor() { }

  ngOnInit() {
    this.createBillModel = {
      material: '',
      plant: '',
      bomUsage: '',
      changeNumber: '',
      validFrom: '',
      revisionLevel: ''};
  }

  onSubmit(value: any){
    console.log(value);
    
    // if (this.createBillModel ) {
    //   this.router.navigateByUrl('create_bill');
  }

}
