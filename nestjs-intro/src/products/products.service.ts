import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { products } from "src/user/entities/user.entity";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UpdateUserDto } from "src/user/dto/update-user.dto";
import { log } from "console";


@Injectable()
export class ProductService{
   
   private products : Product [] = [];
    
    insertProduct(
            //  id:          number,
            customerName :string,
            abbreviation :string,
            contactNumber:number,
            address1     :string,
            address2     :string,
            country      :string,
            city         :string,
            postal:number,
            customerEmail:string,
            customerUrl:string,
            contactPhone:number,
            status : boolean,
            activeDate : string) {
                // const cId = new Date().toString() ;
         const newProduct = new Product(customerName, abbreviation,contactNumber, address1, address2 ,country , city , postal ,customerEmail , customerUrl,contactPhone , status, activeDate);
       return this.products.push(newProduct);
              // return cId;
            }
             
            
            getProducts(){
            return [...this.products];  // spread operator is used to copy the product array to another array and update the array

            }

        getSingleProduct(id : number){
          const product = this.products.find(prop => prop.id === id);
          if (product === null){
            throw new NotFoundException("Wrong ID");
          }
          return [...this.products]; 
        }
        
      //   update(
      //   customerName :string,
      //   abbreviation :string,
      //   contactNumber:Number,
      //   address1     :string,
      //   address2     :string,
      //   country :string,
      //   city:string,
      //   postal:number,
      //   customerEmail:string,
      //   customerUrl:string,
      //   contactPhone:Number,
      //   status : boolean,
      //   activeDate : string
      //       ){
      // const  = this.findProduct;
      //       }

      //      private findProduct(id : number) : [Product , number] {
      //         const productIndex = this.products.findIndex(prop => prop.id === id);
      //         const product = this.products[productIndex];
      //         if (product === null){
      //           throw new NotFoundException("Wrong ID");
      //         }
      //         return [product , productIndex];
      
      
      removeProduct(id:number) {
        const index = this.findProduct(id)[1];
        this.products.slice(id);
      }
  
      findProduct(id: number) {
    const product = this.products.find(prop => prop.id === id );
    if (product === null){
        throw new Error("Method not implemented.");
    }
    return [...this.products];

      








  
  // Here we are using data mapper approach that is why we are injecting repository 

  // constructor(
  //   @InjectRepository(products) private readonly userRepository: Repository<products>,
  // ) {} 


/**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */



  // createUser(createUserDto: CreateUserDto): Promise<products> {
  //   const user: products = new products();
  //   user.customerName = createUserDto.customerName;
  //   user.abbreviation = createUserDto.abbreviation;
  //   user.contactNumber = createUserDto.contactNumber;
  //   user.address1  = createUserDto.  address1 ;
  //   user.address2  = createUserDto.  address2 ;
  //   user.country = createUserDto. country;
  //   user.city = createUserDto.city;
  //   user.postal = createUserDto. postal;
  //   user.customerEmail = createUserDto.customerEmail;
  //   user.customerUrl = createUserDto.customerUrl;
  //   user.contactPhone = createUserDto.contactPhone;
  //   user.status = createUserDto.status;
  //   user.activeDate = createUserDto.activeDate;

  //   return this.userRepository.save(user);
  // }
  
  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   * Promise acts like a datatype ... in which the array user gives the return assynchronilly
   */

  // findAllUser():Promise<products[]>
  //   {
  //   return this.userRepository.find();
  //   }

      /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */

    // viewUser(id: number): Promise<products>{
    //   return this.userRepository.findOneBy({ id });
    // }

     /**
  //  * this function is used to updated specific user whose id is passed in
  //  * parameter along with passed updated data
  //  * @param id is type of number, which represent the id of user.
  //  * @param updateUserDto this is partial type of createUserDto.
  //  * @returns promise of udpate user
  //  */

     
  // updateUser(id: number, updateUserDto: UpdateUserDto): Promise<products> {
  //   const user: products = new products();
  //   user.customerName = updateUserDto.customerName;
  //   user.abbreviation = updateUserDto.abbreviation;
  //   user.contactNumber = updateUserDto.contactNumber;
  //   user.address1 = updateUserDto.address1;
  //   user.address2 = updateUserDto.address2;
  //   user.country = updateUserDto.country;
  //   user.city = updateUserDto.city;
  //   user.postal = updateUserDto.postal;
  //   user.customerEmail = updateUserDto.customerEmail;
  //   user.customerUrl = updateUserDto.customerUrl;
  //   user.contactPhone = updateUserDto.contactPhone;
  //   user.status = updateUserDto.status;
  //   user.activeDate = updateUserDto.activeDate;
  //   user.id = id;

  //   return this.userRepository.save(user);
  // }

     /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  
  //  removeUser(id: number): Promise<{affected?: number}>{
  //   return this.userRepository.delete(id);
  //  }


}
}

