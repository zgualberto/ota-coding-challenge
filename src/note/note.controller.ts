import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.sevice';
import { CreateValidator } from './dto/validator/create.dto';
import { ShowValidator } from './dto/validator/show.dto';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateValidator) {
    return this.noteService.create(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  list() {
    return this.noteService.list();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  show(@Param() dto: ShowValidator) {
    return this.noteService.show(dto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param() dto: ShowValidator, @Body() body: CreateValidator) {
    return this.noteService.update(dto, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param() dto: ShowValidator) {
    return this.noteService.remove(dto);
  }
}
