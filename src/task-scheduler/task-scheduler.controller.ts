import { Controller, Get, Post, Body, Patch, Param, Put, Delete } from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { assignTaskDto } from './dto/assign-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { addTeamMemberDto } from './dto/add-member.dto';
import { updateTaskDto } from './dto/udpate-task.dto';

@Controller('task-scheduler')
export class TaskSchedulerController {
  constructor(private readonly taskSchedulerService: TaskSchedulerService) { }

  @Post('/create-task')
  createTask(@Body() data: CreateTaskDto) {
    return this.taskSchedulerService.create(data);
  }

  @Put('/assign-task')
  assignTask(@Body() data: assignTaskDto) {
    return this.taskSchedulerService.assignTask(data);
  }

  @Post('/create-team')
  createTeam(@Body() data: CreateTeamDto) {
    return this.taskSchedulerService.createTeam(data);
  }

  @Post('/add-member')
  addMember(@Body() data: addTeamMemberDto) {
    return this.taskSchedulerService.addTeamMember(data);
  }

  // Route to update the properties of a task
  @Put('/update-task')
  changetaskStatus(@Body() data: updateTaskDto) {
    return this.taskSchedulerService.changeTask(data);
  }

  // Route to get all the tasks assigned to a particular team member
  @Get('/get-all-assigned-tasks')
  getAllAssignedTasks() {
    return this.taskSchedulerService.getAllAssignedTasks();
  }


}
