import { Module } from '@nestjs/common';
import { UserUseCaseModule } from './application/use-cases/user/user.use-case.module';
import { DataServicesModule } from './infrastructure/data-services/data-services.module';
import { UserController } from './presentation';

@Module({
  imports: [
    UserUseCaseModule,
    DataServicesModule
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
