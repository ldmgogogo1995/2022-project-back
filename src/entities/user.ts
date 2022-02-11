/*
 * @Description: 用户数据库模型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-02-11 01:42:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-12 02:50:01
 */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn() // 自动生成主键列
  id: number;
  @Column()
  nickname: string;
  @Column()
  account: string;
}
