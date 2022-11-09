import { TaskSchedulerService } from './task-scheduler.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { assignTaskDto } from './dto/assign-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { addTeamMemberDto } from './dto/add-member.dto';
import { updateTaskDto } from './dto/udpate-task.dto';
export declare class TaskSchedulerController {
    private readonly taskSchedulerService;
    constructor(taskSchedulerService: TaskSchedulerService);
    createTask(data: CreateTaskDto): Promise<{
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
    addMember(data: addTeamMemberDto): Promise<{
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
    changetaskStatus(data: updateTaskDto): Promise<{
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
