import { Module } from '@nestjs/common';
import { EmployeeModule } from '../employee/employee.module';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

const services = [DepartmentService];

@Module({
  imports: [EmployeeModule],
  controllers: [DepartmentController],
  providers: [...services],
  exports: [...services],
})
export class DepartmentModule {}
