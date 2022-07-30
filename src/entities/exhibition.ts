/*
 * @Description:展会数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-30 02:21:27
 */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Base } from "./base";
@Entity()
export class Exhibition extends Base {
  @Column()
  name: string;
}
