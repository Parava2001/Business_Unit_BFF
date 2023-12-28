import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UpdateUserDto } from "src/user/dto/update-user.dto";



@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService){} 

    @Post()
    addProducts(
        // @Body('id') id:number,
        @Body('customerName') cName: string,   
        @Body('abbreviation') aName: string,
        @Body('contactNumber') cNumber:number,
        @Body('address1') Add1: string,
        @Body('address2') Add2: string,
        @Body('country ') country: string,
        @Body('city') city: string,
        @Body('postal')        post: number,
        @Body('customerEmail') cEmail: string,
        @Body('customerUrl') cUrl: string,
        @Body('contactPhone') cPhone: number,
        @Body('status') stat:boolean,
        @Body('activeDate') aDate: string,
        ) {                            // @Body is the decorater which is used to provid the datas to the service or providers
const generatedId =  this.productService.insertProduct(cName,aName,cNumber,Add1,Add2,country,city,post,cEmail,cUrl,cPhone,stat,aDate);
       return {id : generatedId};
}
    @Get()
        getAllProducts(){
            return this.productService.getProducts();
        }
 

        @Get(':id')
        getProduct(@Param('id') id:number,) {
            return this.productService.getSingleProduct(id);
        }

        // @Patch(':id')
        // updateProduct(
        // @Body('customerName') cName: string,   
        // @Body('abbreviation') aName: string,
        // @Body('contactNumber') cNumber:number,
        // @Body('address1') Add1: string,
        // @Body('address2') Add2: string,
        // @Body('country ') country: string,
        // @Body('city') city: string,
        // @Body('postal')        post: number,
        // @Body('customerEmail') cEmail: string,
        // @Body('customerUrl') cUrl: string,
        // @Body('contactPhone') cPhone: number,
        // @Body('status') stat:boolean,
        // @Body('activeDate') aDate: string,
        // ) {}

        @Delete(':id')
        deleteProduct(@Param('id') id:number, ){
            this.productService.removeProduct(id);
            return null;
        }
















     /**
   * Post decorator represents method of request as we have used post decorator the method
   * of this API will be post.
   * so the API URL to create User will be
   * POST http://localhost:3000/user
   */

    // @Post()
    // create(@Body() createUserDto : CreateUserDto) 
    // {
    //     return this.productService.createUser(createUserDto);
    // }

         /**
   * we have used get decorator to get all the user's list
   * so the API URL will be
   * GET http://localhost:3000/user
//    */
//     @Get()
//     findAll() {
//         return this.productService.findAllUser();
//     }

    /**
   * we have used get decorator with id param to get id from request
   * so the API URL will be
   * GET http://localhost:3000/user/:id
   */



  /**
   * we have used patch decorator with id param to get id from request
   * so the API URL will be
   * PATCH http://localhost:3000/user/:id
   */


    // @Patch()
    // update (@Param('id') id : string , @Body() updateUserDto: UpdateUserDto){
    //     return this.productService. updateUser(+id , updateUserDto);
    // }


/**
   * we have used Delete decorator with id param to get id from request
   * so the API URL will be
   * DELETE http://localhost:3000/user/:id
   */

    // @Delete(':id')
    // remove(@Param('id') id:string){
    //     return this.productService.removeUser(+id);
    // }

    
}
