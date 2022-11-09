import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { assignTaskDto } from './dto/assign-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { addTeamMemberDto } from './dto/add-member.dto';
import { updateTaskDto } from './dto/udpate-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task-scheduler.entity';
import { teamMembers } from './entities/team-members.entity';
import { team } from './entities/team.entity';
const jwt = require('jsonwebtoken');


@Injectable()
export class TaskSchedulerService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(teamMembers)
    private teamMemberRespository: Repository<teamMembers>,
    @InjectRepository(team)
    private teamRespository: Repository<team>,
  ) { }

  async create(data: CreateTaskDto) {
    try {
      const res = await this.taskRepository.save(data);
      return { data: res, "message": "success" };
    }
    catch (err) {
      return { error: err }
    }
  }

  async assignTask(data: assignTaskDto) {
    try {
      const teamMember = await this.teamMemberRespository.findOne({
        where: {
          id: data.assigneeId
        }
      });
      if (!teamMember) {
        return { message: "Team member not found" }
      }
      else {
        await this.taskRepository.update(data.taskId, { assignee: data.assigneeId, status: "assigned" });
        return { message: "Task assigned successfully" }
      }
    }
    catch (err) {
      return { error: err }
    }
  }

  async createTeam(data: CreateTeamDto) {

    // check if the team with the same name already exists
    try {
      let isDuplicateFound = await this.teamRespository.findOne({
        where: {
          team_name: data.team_name
        }
      })
      if (isDuplicateFound) {
        return { message: "Team already exists" }
      }
      const res = await this.teamRespository.save(data);
      return { data: res, message: "Team created successfully" }
    }
    catch (err) {
      return { error: err }
    }
  }

  async addTeamMember(data: addTeamMemberDto) {
    try {
      // Check if the team member with the employee id already exists
      let isDuplicateFound = await this.teamMemberRespository.findOne({
        where: {
          empId: data.empId
        }
      })
      // Check if the team is created or not
      let isTeamCreated = await this.teamRespository.findOne({
        where: {
          id: data.teamNumber
        }
      })
      if (!isTeamCreated) return { message: "Team does not exists" };
      if (isDuplicateFound) return { message: "Team member already exists" }
      const res = await this.teamMemberRespository.save(data);
      return { data: res, message: "Team member added successfully" }
    }
    catch (err) {
      return { error: err }
    }
  }

  async changeTask(data: updateTaskDto) {
    try {
      const isTaskPresent = await this.taskRepository.findOne({
        where: {
          id: data.taskId
        }
      })
      if (isTaskPresent) {
        let updatedObj = {}
        if (data.status) {
          updatedObj["status"] = data.status
        }
        if (data.assigneeId) {
          const teamMember = await this.teamMemberRespository.findOne({
            where: {
              id: data.assigneeId
            }
          });
          if (!teamMember) {
            return { message: "Team member not found" }
          }
          updatedObj["assignee"] = data.assigneeId
        }
        if (data.description) {
          updatedObj["description"] = data.description
        }
        const res = await this.taskRepository.update(data.taskId, updatedObj);
        return { res, message: "Task  updated successfully" }
      }
      else {
        return { message: "Task does not exists" }
      }
    }
    catch (err) {
      return { error: err }
    }
  }

  async getAllAssignedTasks() {
    try {
      const res = await this.taskRepository.find({
        where: {
          status: "assigned"
        }
      })
      return { data: res, message: "success" }
    }
    catch (err) {
      return { error: err }
    }
  }

 
}
