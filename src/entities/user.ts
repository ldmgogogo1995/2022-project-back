/*
 * @Description: 用户数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-30 02:20:53
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Base } from "./base";
@Entity()
export class User extends Base {
  @Column()
  nickname: string;
  @Column()
  account: string;
  @Column()
  password: string;
}
