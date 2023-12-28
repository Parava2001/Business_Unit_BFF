import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BusinessUnitController } from './business-unit.controller';
import { BusinessUnitService } from './business-unit.service';

@Module({
    imports:[HttpModule],
controllers:[BusinessUnitController],
providers:[BusinessUnitService]
})
export class BusinessUnitModule {}
