import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class teamMembers {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    empId:string;
    // The teamNumber will be the primary key of the team table
    @Column({nullable:false})
    teamNumber:number;
    @Column({default: () => 'NOW()'})
    createdAt:Date;
}
