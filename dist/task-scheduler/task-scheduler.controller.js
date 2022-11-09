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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchedulerController = void 0;
const common_1 = require("@nestjs/common");
const task_scheduler_service_1 = require("./task-scheduler.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const assign_task_dto_1 = require("./dto/assign-task.dto");
const create_team_dto_1 = require("./dto/create-team.dto");
const add_member_dto_1 = require("./dto/add-member.dto");
const udpate_task_dto_1 = require("./dto/udpate-task.dto");
let TaskSchedulerController = class TaskSchedulerController {
    constructor(taskSchedulerService) {
        this.taskSchedulerService = taskSchedulerService;
    }
    createTask(data) {
        return this.taskSchedulerService.create(data);
    }
    assignTask(data) {
        return this.taskSchedulerService.assignTask(data);
    }
    createTeam(data) {
        return this.taskSchedulerService.createTeam(data);
    }
    addMember(data) {
        return this.taskSchedulerService.addTeamMember(data);
    }
    changetaskStatus(data) {
        return this.taskSchedulerService.changeTask(data);
    }
    getAllAssignedTasks() {
        return this.taskSchedulerService.getAllAssignedTasks();
    }
};
__decorate([
    (0, common_1.Post)('/create-task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)('/assign-task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_task_dto_1.assignTaskDto]),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "assignTask", null);
__decorate([
    (0, common_1.Post)('/create-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "createTeam", null);
__decorate([
    (0, common_1.Post)('/add-member'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_member_dto_1.addTeamMemberDto]),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "addMember", null);
__decorate([
    (0, common_1.Put)('/update-task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [udpate_task_dto_1.updateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "changetaskStatus", null);
__decorate([
    (0, common_1.Get)('/get-all-assigned-tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskSchedulerController.prototype, "getAllAssignedTasks", null);
TaskSchedulerController = __decorate([
    (0, common_1.Controller)('task-scheduler'),
    __metadata("design:paramtypes", [task_scheduler_service_1.TaskSchedulerService])
], TaskSchedulerController);
exports.TaskSchedulerController = TaskSchedulerController;
//# sourceMappingURL=task-scheduler.controller.js.map