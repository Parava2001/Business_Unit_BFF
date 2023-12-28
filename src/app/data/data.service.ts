import { Injectable } from '@angular/core';
import { customerData } from '../customer-data';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { businessList } from '../add-business-unit/business-list';


@Injectable({
  providedIn: 'root' // Service is a Root Injector in which it service is appilicable for whole application
})
export class DataService {
  settedData: any;
  private editflag = new BehaviorSubject(false);  // for editing concept


  // getSubscriptionTypes(): { new(subscribe?: ((this: Observable<string[]>, subscriber: import("rxjs").Subscriber<string[]>) => import("rxjs").TeardownLogic) | undefined): Observable<string[]>; prototype: Observable<...>; create: (...args: any[]) => any; } {
  //   throw new Error('Method not implemented.');
  // }
  
 
  getcountryTypes() : Observable<string[]> {  // Observable is like a notification in which when we subscribe it reacts
  return of(['India','Pakistan','Nepal']);
  }



  constructor(private http: HttpClient) { } // deploying http as a dependency in constructor 


  customerService( CustomerData :  customerData )   { // observable and <type to the observable>

     return (this.http.post('http://localhost:3000/products', CustomerData)).subscribe((value)=>{
      console.log(value);
     });

   // post is giving the details to the http .In this url part we are searching

// return of(CustomerData); // CustomerData is our data
 }
 recivedData:boolean=false;
 
//  businessService(list:any) {
//    return (this.http.post('http://localhost:3000/business-unit',list)).subscribe((value)=>{
//     console.log(value);
//   });
//    }

   postBusinessList(lst:any){
    return this.http.post("http://localhost:3000/business-unit",lst).subscribe((value) => {
      return (value)
    });
  }
    getBusinessList(){
     const value = this.http.get("http://localhost:3000/business-unit")
     return (value)
    }

    getBusinessUnitById(id:number){
      const values = this.http.get("http://localhost:3000/business-unit/" + id)
      return (values)
    }
   
   

        reciveData(data:boolean){
          this.recivedData=data
        }
        sendData(){
          return this.recivedData;
        }

        setdata(values:any){         // for setting data for editting purpose 
          this.settedData=values;
        }

        getdata(){                  // for storing the recieved data from the editted data
          return this.settedData;
        }

        setbehavior(value:any){
          this.editflag.next(value);
          console.log(this.editflag);
        }

        MyBehaviourSubject(){
          return this.editflag;
        }
        }


 








// In this dataservice it can be assesable for all the angular components , so not be assessed into the appmodule