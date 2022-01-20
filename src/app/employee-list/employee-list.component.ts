import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2> product lists</h2>
  <ul *ngFor ="let product of products">
  <li>{{product.name}}</li>
  </ul>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  public products = [
    {"id":1, "name":"electronic"},
    {"id":2,"name":"homemade"},
    {"id":3,"name":"fasion"},
    {"id":4,"name":"application"}
    
   ];
  constructor( ) { }

  ngOnInit() {
  }
}
