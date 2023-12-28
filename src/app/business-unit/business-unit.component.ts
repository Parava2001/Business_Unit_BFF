import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { businessList } from '../add-business-unit/business-list';
@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent {
  
  boolsearch=true;
  booladd=false;
  boolValue : any;

  onSearch(){
    this.boolsearch = true;
    this.booladd=false;
    this.boolValue = false;
    this.dataService.setbehavior(this.boolValue) // this function is used fo the edit feature . 
                                                 //   When thje edit button is cliked it passes the data to Add-Business unit , 
                                                 //but when returned to the search component and gone back to the Add-component
                                                 // the same data of edit is dispalyed . For that , 'setbehavior' function is used
                                                       
  }

  onAdd(){
    this.boolsearch = false;
    this.booladd=true;
   this.dataService.reciveData(this.booladd)
   this.boolValue=false;
   this.dataService.setbehavior(this.boolValue) // this function is used fo the edit feature . 
                                                //   When thje edit button is cliked it passes the data to Add-Business unit , 
                                                //but when returned to the search component and gone back to the Add-component
                                                // the same data of edit is dispalyed . For that , 'setbehavior' function is used
  }
  originalBusinessList : businessList = {
    customerName: 'Alby',
    businessUnit: 'Alby',
    businessUnitName: 'Alby',
    vertical: 'Alby',
    channel: 'Alby',
    synapseCustomer: 'Alby',
    status:true,
    inactiveDate: 'Alby'
  };
  BusinessList : businessList = {...this.originalBusinessList};
  constructor (public dataService : DataService){  }

}

