import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UrlCheckModule } from './url-check/url-check.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/health-checker'),
    UserModule,
    UrlCheckModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
