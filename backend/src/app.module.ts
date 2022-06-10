import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { NewsModule } from './news/news.module'
import {ConfigModule, ConfigService} from '@nestjs/config'
import { AppController } from './app.controller'
import {MongooseModule} from '@nestjs/mongoose'
import {MongooseConfigService} from '../config/mongoose.config.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
