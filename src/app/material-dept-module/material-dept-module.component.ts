import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-dept-module',
  templateUrl: './material-dept-module.component.html',
  styleUrls: ['./material-dept-module.component.css']
})
export class MaterialDeptModuleComponent implements OnInit {

  materialModel: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.materialModel = { section1: '', section2: '' };
  }

  goToPage() {
    if (this.materialModel.section1 === 'create' && this.materialModel.section2 === 'billOfMaterial') {
      this.router.navigateByUrl('create_bill');
    }
    else{
      alert(" please select any other combination");
    }
  }

}
