import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import config from './infrastructure/config/index';
import { HealthModule } from './domain/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      envFilePath: config[process.env.NODE_ENV],
    }),
    HealthModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {
  static PORT: number | string;

  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get<number>('NODE_PORT');
  }
}
