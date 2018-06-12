import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    // this.dtTrigger.next();
  }



}
