/*
 * @Description: 用户数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-05 18:45:49
 */
import { Entity, Column } from "typeorm";
import { Base } from "./base";
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
  @Column()
  phone: number;
  @Column()
  status: number;
}
