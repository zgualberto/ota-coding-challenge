import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteCustomRepository } from '../config/databases/ota/repositories/note.repository';
import { CreateValidator } from './dto/validator/create.dto';
import { ShowValidator } from './dto/validator/show.dto';

@Injectable()
export class NoteService {
  constructor(private noteRepository: NoteCustomRepository) {}

  async create(dto: CreateValidator) {
    return {
      result: await this.noteRepository.store(dto),
    };
  }

  async list() {
    return {
      result: await this.noteRepository.getAll(),
    };
  }

  async show(dto: ShowValidator) {
    const note = await this.noteRepository.getOneById(dto.id);

    if (!note) throw new NotFoundException(`Cannot find this id: ${dto.id}`);

    return {
      result: note,
    };
  }

  async update(dto: ShowValidator, body: CreateValidator) {
    await this.show(dto);

    return {
      result: await this.noteRepository.store({
        noteID: dto.id,
        ...body,
      }),
    };
  }

  async remove(dto: ShowValidator) {
    const note = await this.show(dto);

    await this.noteRepository.remove(dto.id);

    return {
      ...note,
    };
  }
}
