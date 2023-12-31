import { IsEnum } from 'class-validator';
import { TaskStatusEnum } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatusEnum, {
    message: `Invalid status provided. Must be one of: '${Object.values(
      TaskStatusEnum,
    ).join(', ')}' `,
  })
  status: TaskStatusEnum;
}
