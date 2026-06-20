import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { RiskManagementHealthIndicator } from '../investment/risk-management/risk-management.health';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly riskHealth: RiskManagementHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.riskHealth.isHealthy('risk-management'),
    ]);
  }
}
