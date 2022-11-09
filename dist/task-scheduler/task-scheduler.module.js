"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const task_scheduler_service_1 = require("./task-scheduler.service");
const task_scheduler_controller_1 = require("./task-scheduler.controller");
const typeorm_1 = require("@nestjs/typeorm");
const task_scheduler_entity_1 = require("./entities/task-scheduler.entity");
const team_members_entity_1 = require("./entities/team-members.entity");
const team_entity_1 = require("./entities/team.entity");
let TaskSchedulerModule = class TaskSchedulerModule {
};
TaskSchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([task_scheduler_entity_1.Task, team_members_entity_1.teamMembers, team_entity_1.team])],
        controllers: [task_scheduler_controller_1.TaskSchedulerController],
        providers: [task_scheduler_service_1.TaskSchedulerService],
        exports: [typeorm_1.TypeOrmModule]
    })
], TaskSchedulerModule);
exports.TaskSchedulerModule = TaskSchedulerModule;
//# sourceMappingURL=task-scheduler.module.js.map