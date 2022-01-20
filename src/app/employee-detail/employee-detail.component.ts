import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2> product details</h2>
    <ul *ngFor ="let product  of products">
    <li> {{product.id}}.{{product.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {    
  public products = [
    {"id":1, "name":"electronic"},
    {"id":2,"name":"homemade"},
    {"id":3,"name":"fasion"},
    {"id":4,"name":"application"}
   ];

  constructor() { }

  ngOnInit() {
  }
 }