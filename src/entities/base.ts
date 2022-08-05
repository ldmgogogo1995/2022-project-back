/*
 * @Description: 通用表字段
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-07-30 02:14:14
 * @LastEditors: ldm
 * @LastEditTime: 2022-07-31 02:14:14
 */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Base {
  @PrimaryGeneratedColumn() // 自动生成主键列
  id: number;
  @Column()
  discription: string; //描述
  @Column()
  createDate: number; //创建时间
  @Column()
  updateDate: number; //更新时间
}
