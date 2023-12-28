import { Module } from "@nestjs/common";
import { ProductService } from "./products.service";
import { ProductController } from "./products.controller";
import { products } from "src/user/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    // imports: [TypeOrmModule.forFeature([products])],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule{}