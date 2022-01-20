import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService : HttpClient) {}
  navsubcat(){
    const href = environment.api.navsubcat;  
    return this.httpService.get<any>(href, { 'observe': 'response' })

  }
}