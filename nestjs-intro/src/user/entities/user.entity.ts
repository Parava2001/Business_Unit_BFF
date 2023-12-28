import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class products {
    /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  customerName :string;

  @Column({ type: 'varchar', length: 10 })
  abbreviation :string;

  @Column({ type: 'int' })
  contactNumber:number;

  @Column({ type: 'varchar', length: 100 })
  address1 :string;

  @Column({ type: 'varchar', length: 100 })
  address2 :string;

  @Column({ type: 'varchar', length: 30 })
  country:string;

  @Column({ type: 'varchar', length: 30 })
  city:string;

  @Column({ type: 'int' })
  postal:number;

  @Column({ type: 'varchar', length: 40 })
  customerEmail: string; 

  @Column({ type: 'varchar', length: 40 })
  customerUrl: string; 

  @Column({ type: 'int' })
  contactPhone:number;

  @Column({ type: 'boolean' })
  status : boolean;

  @Column({ type: 'varchar', length: 40 })
  activeDate: string; 

}
