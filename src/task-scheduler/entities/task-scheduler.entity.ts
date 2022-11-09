import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true})
    description:string;
    @Column({nullable:false})
    due_date:string;
    // Assignee will be the primary key of the team-members table
    @Column({nullable:true})
    assignee:number;
    // By default the task will not be assigned to  any team member
    @Column({default: 'pending/not-assigned'})
    status:string;
    @Column({default: () => 'NOW()'})
    createdAt:Date;
}
