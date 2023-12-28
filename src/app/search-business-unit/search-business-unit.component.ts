import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BusinessData } from './business-data';
import {cusList} from './cus-list';
import { DataService } from '../data/data.service';
import { BusinessUnitComponent } from '../business-unit/business-unit.component';

@Component({
  selector: 'app-search-business-unit',
  templateUrl: './search-business-unit.component.html',
  styleUrls: ['./search-business-unit.component.css']
})



export class SearchBusinessUnitComponent implements OnInit {
  Bvalue: any;
  idValue: any;
 constructor (private  dataservice : DataService , 
              private businessUnitComponent : BusinessUnitComponent ){}

  businessData : BusinessData[] = []; // initialling the [value] in the table 
    
  // cols= [
  //   { field: '', header: 'Edit' },
  //   { field: 'businessUnit', header: 'Business Unit' },
  //   { field: 'vertical', header: 'Vertical' },
  //   { field: 'channel', header: 'Channel' },
  //   { field: 'status', header: 'Status' },
  //   { field: 'synapseCustomer', header: 'Synapse Customer' },
  //   { field: 'activeDate', header: 'Active Date' },
  //   { field: 'inactiveDate', header: 'Inactive Date' },
  //   { field: 'lastUpdateDate', header: 'LastUpdate Date' },
  //   { field: 'lastUpdateUser', header: 'LastUpdate User'}
  //   ];

    checked: boolean = true ; // for toogle button

     CustomerList:cusList[] | undefined;  //dropdown list
     selectedList : cusList | undefined;
        ngOnInit()
        {    
           this.dataservice.getBusinessList().subscribe((value)=>{
            this.Bvalue = value;
            console.log(this.Bvalue,'jj') 
        });
            
          
                    this.CustomerList=[
                    {name:'Alby'},
                    {name:'Alby'},
                    {name:'Alby'},
                    {name:'Alby'},
                  ];
        }

        onEdit(id:number){
         
          this.dataservice. getBusinessUnitById(id).subscribe((values)=>{
          //  return this.idValue = values;
          // console.log(this.idValue);
          this.dataservice.setdata(values)
          this.businessUnitComponent.onAdd()
          this.dataservice.setbehavior(true);

          }
       )};
        
  }
  
