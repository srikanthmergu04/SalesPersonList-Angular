import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList:SalesPerson[] = [
    new SalesPerson('rakesh','kumar','rakesh@gmail.com',6000),
    new SalesPerson('captain','america','captain@gmail.com',2000),
    new SalesPerson('Tony','Stark','tony@gmail.com',9000),
    new SalesPerson('hulk','angry','hulk@gmail.com',4000),
  ];



  ngOnInit(): void {
  }

}
