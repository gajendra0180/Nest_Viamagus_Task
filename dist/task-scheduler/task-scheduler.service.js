"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchedulerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_scheduler_entity_1 = require("./entities/task-scheduler.entity");
const team_members_entity_1 = require("./entities/team-members.entity");
const team_entity_1 = require("./entities/team.entity");
const jwt = require('jsonwebtoken');
let TaskSchedulerService = class TaskSchedulerService {
    constructor(taskRepository, teamMemberRespository, teamRespository) {
        this.taskRepository = taskRepository;
        this.teamMemberRespository = teamMemberRespository;
        this.teamRespository = teamRespository;
    }
    async create(data) {
        try {
            const res = await this.taskRepository.save(data);
            return { data: res, "message": "success" };
        }
        catch (err) {
            return { error: err };
        }
    }
    async assignTask(data) {
        try {
            const teamMember = await this.teamMemberRespository.findOne({
                where: {
                    id: data.assigneeId
                }
            });
            if (!teamMember) {
                return { message: "Team member not found" };
            }
            else {
                await this.taskRepository.update(data.taskId, { assignee: data.assigneeId, status: "assigned" });
                return { message: "Task assigned successfully" };
            }
        }
        catch (err) {
            return { error: err };
        }
    }
    async createTeam(data) {
        try {
            let isDuplicateFound = await this.teamRespository.findOne({
                where: {
                    team_name: data.team_name
                }
            });
            if (isDuplicateFound) {
                return { message: "Team already exists" };
            }
            const res = await this.teamRespository.save(data);
            return { data: res, message: "Team created successfully" };
        }
        catch (err) {
            return { error: err };
        }
    }
    async addTeamMember(data) {
        try {
            let isDuplicateFound = await this.teamMemberRespository.findOne({
                where: {
                    empId: data.empId
                }
            });
            let isTeamCreated = await this.teamRespository.findOne({
                where: {
                    id: data.teamNumber
                }
            });
            if (!isTeamCreated)
                return { message: "Team does not exists" };
            if (isDuplicateFound)
                return { message: "Team member already exists" };
            const res = await this.teamMemberRespository.save(data);
            return { data: res, message: "Team member added successfully" };
        }
        catch (err) {
            return { error: err };
        }
    }
    async changeTask(data) {
        try {
            const isTaskPresent = await this.taskRepository.findOne({
                where: {
                    id: data.taskId
                }
            });
            if (isTaskPresent) {
                let updatedObj = {};
                if (data.status) {
                    updatedObj["status"] = data.status;
                }
                if (data.assigneeId) {
                    const teamMember = await this.teamMemberRespository.findOne({
                        where: {
                            id: data.assigneeId
                        }
                    });
                    if (!teamMember) {
                        return { message: "Team member not found" };
                    }
                    updatedObj["assignee"] = data.assigneeId;
                }
                if (data.description) {
                    updatedObj["description"] = data.description;
                }
                const res = await this.taskRepository.update(data.taskId, updatedObj);
                return { res, message: "Task  updated successfully" };
            }
            else {
                return { message: "Task does not exists" };
            }
        }
        catch (err) {
            return { error: err };
        }
    }
    async getAllAssignedTasks() {
        try {
            const res = await this.taskRepository.find({
                where: {
                    status: "assigned"
                }
            });
            return { data: res, message: "success" };
        }
        catch (err) {
            return { error: err };
        }
    }
};
TaskSchedulerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_scheduler_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(team_members_entity_1.teamMembers)),
    __param(2, (0, typeorm_1.InjectRepository)(team_entity_1.team)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], TaskSchedulerService);
exports.TaskSchedulerService = TaskSchedulerService;
//# sourceMappingURL=task-scheduler.service.js.map