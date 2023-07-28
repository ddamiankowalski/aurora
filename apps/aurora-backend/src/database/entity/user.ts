import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36 })
  firstName: string;

  @Column({ length: 36 })
  lastName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 36 })
  password: string;

  @Column()
  isActive: boolean;
}
