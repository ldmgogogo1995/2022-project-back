/*
 * @Description: 角色数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-11-16 23:06:28
 */
import { Entity, Column } from "typeorm";
import { Base } from "./base";
@Entity()
export class Role extends Base {
  @Column()
  name: string;
  @Column()
  status: number;
  @Column()
  code: string;
}
