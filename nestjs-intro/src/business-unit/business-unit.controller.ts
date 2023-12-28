import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BusinessUnitService } from './business-unit.service';

@Controller('business-unit')
export class BusinessUnitController{
  

    constructor (private readonly businessUnitService: BusinessUnitService){}

    @Post()
     async create(@Body() businessUnitData :any ){
        console.log(businessUnitData)
     const result = await this.businessUnitService.AddBusinessUnit(businessUnitData)
     return(result)
}

    @Get()
    async take(){
        const result = await this.businessUnitService.GetBusinessUnit()
        return(result)
    }

    @Get(":id")
    async getById(@Param('id') id:number){
        const result = await this.businessUnitService.GetByIdBusinessUnit(id)   
        return (result) 
    }

    @Patch(":id")
        async update(@Param('id') id:number , @Body() businessUnitData :any )
        {
            const result = await this.businessUnitService.EditBusinessUnit(id , businessUnitData)
            return result;
        }

     @Delete(':id')
    async remove(@Param('id') id:number){
       const result = await this.businessUnitService.DeleteBusinessUnit(id)
       return (result)
    }
}
