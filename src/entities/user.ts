/*
 * @Description: 用户数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-28 01:42:19
 */
import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Base } from "./base";
import { Role } from "./role";
@Entity()
export class User extends Base {
  @Column()
  nickname: string;
  @Column()
  account: string;
  @Column()
  password: string;
  @Column()
  age: number;
  @Column()
  sex: string;
  @Column()
  email: string;
  @Column({ type: "bigint" })
  phone: number;
  @Column({
    default: 1,
  })
  status: number;
  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
