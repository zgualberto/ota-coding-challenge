import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../config/databases/ota/entities/note.entity';
import { NoteService } from './note.sevice';
import { NoteController } from './note.controller';
import { NoteCustomRepository } from '../config/databases/ota/repositories/note.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Note], 'otaDBConnection')],
  controllers: [NoteController],
  providers: [NoteCustomRepository, NoteService],
})
export class NoteModule {}
