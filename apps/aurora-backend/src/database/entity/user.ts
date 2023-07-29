import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36 })
  firstName: string;

  @Column({ length: 36 })
  lastName: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  static async createNew(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ): Promise<void> {
    const newUser = new User();
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = password;
    await newUser.save();
  }
}
