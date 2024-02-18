import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { otaConfig } from './config/databases/ota/ota.config';
import { NoteModule } from './note/note.module';

@Module({
  imports: [TypeOrmModule.forRoot(otaConfig), NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
