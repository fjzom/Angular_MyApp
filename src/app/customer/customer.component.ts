import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './customers.json';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent  implements OnInit {

  customers: Customer[];
  constructor(private CustomerService: CustomerService) { }

  ngOnInit(){
     this.CustomerService.getCustomers().subscribe(
     customers => this.customers = customers
    );
  }

}
