import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { products } from './user/entities/user.entity';
import { BusinessUnitController } from './business-unit/business-unit.controller';
import { BusinessUnitService } from './business-unit/business-unit.service';
import { BusinessUnitModule } from './business-unit/business-unit.module';
import {HttpModule} from '@nestjs/axios';

@Module({
  imports:   // to link modules together 
    // [TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: '127.0.0.1',
    //   port: 5432,
    //   password: 'Alby@123',
    //   username: 'postgres',
    //   entities: [ products],
    //   database: 'Nest To database',
    //   synchronize: true,
    //   logging: true,
    // }),
    [ProductModule, BusinessUnitModule , HttpModule],
   
  
  controllers: [AppController, BusinessUnitController],
  providers: [AppService, BusinessUnitService],
})
export class AppModule {}
