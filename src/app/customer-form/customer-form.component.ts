import { Component, OnInit } from '@angular/core';
import { customerData } from '../customer-data';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
    
  originalcustomerData : customerData = {
    customerName :'Alby Joseph',
    abbreviation :'AJ',
    contactNumber:7902832732,
    address1     :'Hello',
    address2     :'Bye',
    country :' ',
    city:'Kerala',
    postal:686536 ,
    customerEmail:'alby@gmail.com',
    customerUrl:'Alby220',
    contactPhone:9947342612,
    status : true,
    activeDate:'01/04/2001'
  };
  CustomerData : customerData = {...this.originalcustomerData};


  singleToggle= "On";
  postError=true;
  postErrorMessage="";
  CountryTypes : Observable<string[]> | undefined;

constructor(private dataService : DataService) {}

  ngOnInit(){
    this.CountryTypes = this.dataService.getcountryTypes();
    }


    
    onSubmit(form: NgForm) {
     console.log('in onSubmit :' , form.valid)// form.valid determines whether the form is valid or not (boolean answer in inpsect)
    //  if(form.valid){
      this.dataService.customerService(this.CustomerData);
      // }

      // else{
      //   this.postError = true;
      //   this.postErrorMessage = "Please fix the above Errors";
      // }

    }
  onHttpError(errorResponse: any){
    console.log("error :",errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
