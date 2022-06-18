/*
 * @Description: 角色数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-03-08 23:45:27
 */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Role {
  @PrimaryGeneratedColumn() // 自动生成主键列
  id: number;
  @Column()
  name: string;
  @Column()
  status: string;
  @Column()
  discription: string;
  @Column()
  code: string;
}
