import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from './infrastructure/config';
import { HealthModule } from './domain/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    HealthModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {
  static PORT: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get<number>('NODE_PORT');
  }
}
