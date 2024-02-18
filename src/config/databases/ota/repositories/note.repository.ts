import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteCustomRepository {
  constructor(
    @InjectRepository(Note, 'otaDBConnection')
    private repository: Repository<Note>,
  ) {}

  async store(dto: any) {
    return await this.repository.save(dto);
  }

  async getOneById(id: number) {
    return await this.repository.findOneBy({
      noteID: id,
    });
  }

  async getAll() {
    return await this.repository.find();
  }

  async remove(id: number) {
    return await this.repository.delete({
      noteID: id,
    });
  }
}
