import { Component, OnInit } from '@angular/core';
import { businessList } from './business-list';
import { DataService } from '../data/data.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-business-unit',
  templateUrl: './add-business-unit.component.html',
  styleUrls: ['./add-business-unit.component.css']
})
export class AddBusinessUnitComponent  {
      checked:boolean =false;
      businessList! : FormGroup ;
      boolsearch = true;
      booladd = false;
      editform: any;
      editflag: boolean = false;

      
      onAdd(){
          this.boolsearch = false;
          this.booladd=true;
         this.dataService.reciveData(this.booladd)
        }
 

  //  originalBusinessList : businessList = {     this was used for template forms
  //     customerName: '',   
  //     businessUnit: '',
  //     businessUnitName: '',
  //     vertical: '',
  //     channel: '',
  //     synapseCustomer: '',
  //     status:true,
  //     inactiveDate: ''
  //   }


    constructor (private dataService : DataService,
                private        fb: FormBuilder ){  }                    

  
    ngOnInit(){
     this.businessList=this.fb.group({
      CustomerName : '',   // validations can be added in all the entry lists
      BusinessUnit : '',
      BusinessUnitName : '',
      Vertical: '',
      Channel: '',
      SynapseCustomer: '',
      Status:'',
      InactiveDate:''
    })
     this.booladd = this.dataService.sendData();  // used for Save Button and receving the information abt dataservice
    

     this.dataService.MyBehaviourSubject().subscribe((value:boolean)=> {
      // console.log(value);
      this.editflag = value;
      if(value){
        this.edittedData();
      }
     });


  }

    onSubmit(){
    const businessData = this.businessList.value;
    console.log(businessData,'hi')
    this.dataService.postBusinessList(businessData);
              }

      edittedData(){
      this.editform = this.dataService.getdata()
      this.businessList.setValue({                 //setValue is the default keyword used in reactive forms for setting the value 
      CustomerName : this.editform.customerName,
      BusinessUnit : this.editform.businessUnit,
      BusinessUnitName : this.editform.businessUnitName,
      Vertical : this.editform.vertical,
      Channel : this.editform.channel,
      SynapseCustomer : this.editform.synapseCustomer,
      Status : this.editform.status,
      InactiveDate : this.editform.inactiveDate,
      })
                  }
    
}

