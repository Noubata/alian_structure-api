import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { RiskManagementModule } from '../investment/risk-management/risk-management.module';

@Module({
  imports: [TerminusModule, RiskManagementModule],
  controllers: [HealthController],
})
export class HealthModule {}
