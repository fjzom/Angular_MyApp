import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './customers.json';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
export class CustomerService {

  private urlEndPoint: string = 'http://localhost:4041/api/data';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.urlEndPoint);
  }
}
