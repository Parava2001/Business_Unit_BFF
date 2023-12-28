import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios';

@Injectable()
export class BusinessUnitService {
    private url = "http://localhost:5263/api/businessUnit/";
    constructor (private readonly http : HttpService){}

  async AddBusinessUnit(businessUnitData : any){
    return (await this.http.post(this.url+'SaveOrder', businessUnitData)).subscribe(businessUnitData => businessUnitData.data);
  
}
  async GetBusinessUnit()
  {
    const data = this.http.get(this.url+'GetBusinessUnits')
    return  ((await data.toPromise()).data)  // promise is mainly used in the get options because it provides the asyncaronus time for getting the data
  }

    async GetByIdBusinessUnit(id : number) {
      const data = this.http.get(this.url+'GetBusinessUnitsById' + '/' + id)
      return ((await data.toPromise()).data) 
    }


      async EditBusinessUnit(id : number  , businessUnitData : any) {
        return (await this.http.patch(this.url + 'EditLocations' + '/' + id , businessUnitData )).subscribe(businessUnitData => businessUnitData.data);
   
      }


    async DeleteBusinessUnit(id : number){
      const data = await this.http.delete(this.url + 'DeleteUnits' + '/' + id)
      return ((await data.toPromise()).data)
    }
}

