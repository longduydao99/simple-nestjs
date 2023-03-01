import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DepartmentModule } from './modules/department/department.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [DepartmentModule, AuthModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
