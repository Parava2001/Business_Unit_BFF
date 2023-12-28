import{
    IsString,
    MinLength,
    IsNotEmpty,
    IsInt,
    IsBoolean,
}from 'class-validator';






export class CreateUserDto {
        @IsString()
        @MinLength(2, { message: 'Name must have atleast 2 characters.' })
        @IsNotEmpty()
        customerName: string;

        @IsString()
        @MinLength(1, { message: 'Name must have atleast 1 characters.' })
        @IsNotEmpty()
        abbreviation: string;

        @IsInt()
        @MinLength(12, { message: 'Name must have atleast 12 characters.' })
        contactNumber: number;

        @IsString()
        @MinLength(10, { message: 'Name must have atleast 10 characters.' })
        @IsNotEmpty()
        address1: string;

        @IsString()
        @MinLength(10, { message: 'Name must have atleast 10 characters.' })
        @IsNotEmpty()
        address2: string;

        @IsString()
        @IsNotEmpty()
        country : string;

        @IsString()
        @IsNotEmpty()
        city : string;

        @IsInt()
        @MinLength(6, { message: 'Name must have atleast 6 characters.' })
        postal: number;
 
        @IsString()
        @MinLength(10, { message: 'Name must have atleast 10 characters.' })
        @IsNotEmpty()
        customerEmail: string;

        @IsString()
        @MinLength(2, { message: 'Name must have atleast 2 characters.' })
        @IsNotEmpty()
        customerUrl: string;

        @IsInt()
        contactPhone: number;

        @IsBoolean()
        status : boolean;

        @IsString()
        @MinLength(10, { message: 'Name must have atleast 10 characters.' })
        @IsNotEmpty()
        activeDate : string;
    }
