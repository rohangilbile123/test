import { Component, OnInit } from '@angular/core';
import {ProductService }from '../product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myData: any;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.navsubcat().subscribe(
      (_response) => {
        console.log(_response.body);
                if (_response.status === 200) {
                    console.log(_response.body);
                    this.myData=_response.body;

                                        
                } else {
                
                }
            },
            (_error) => {
                console.log(_error);
            }
        );
    }
  
  }

