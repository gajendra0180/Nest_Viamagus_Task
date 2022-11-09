import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class team {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    team_name:string;
    @Column({default: () => 'NOW()'})
    createdAt:Date;
}
