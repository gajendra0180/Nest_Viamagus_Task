import { Module } from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler.service';
import { TaskSchedulerController } from './task-scheduler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task-scheduler.entity';
import { teamMembers } from './entities/team-members.entity';
import { team } from './entities/team.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task,teamMembers,team])],
  controllers: [TaskSchedulerController],
  providers: [TaskSchedulerService],
  exports:[TypeOrmModule]

})
export class TaskSchedulerModule {}
