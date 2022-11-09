import { CreateTaskDto } from './dto/create-task.dto';
import { assignTaskDto } from './dto/assign-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { addTeamMemberDto } from './dto/add-member.dto';
import { updateTaskDto } from './dto/udpate-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task-scheduler.entity';
import { teamMembers } from './entities/team-members.entity';
import { team } from './entities/team.entity';
export declare class TaskSchedulerService {
    private taskRepository;
    private teamMemberRespository;
    private teamRespository;
    constructor(taskRepository: Repository<Task>, teamMemberRespository: Repository<teamMembers>, teamRespository: Repository<team>);
    create(data: CreateTaskDto): Promise<{
        data: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
        message?: undefined;
    }>;
    assignTask(data: assignTaskDto): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
    createTeam(data: CreateTeamDto): Promise<{
        message: string;
        data?: undefined;
        error?: undefined;
    } | {
        data: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        data?: undefined;
    }>;
    addTeamMember(data: addTeamMemberDto): Promise<{
        message: string;
        data?: undefined;
        error?: undefined;
    } | {
        data: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        data?: undefined;
    }>;
    changeTask(data: updateTaskDto): Promise<{
        message: string;
        res?: undefined;
        error?: undefined;
    } | {
        res: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        res?: undefined;
    }>;
    getAllAssignedTasks(): Promise<{
        data: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
        message?: undefined;
    }>;
}
