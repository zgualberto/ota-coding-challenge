import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn({
    name: 'note_id',
  })
  noteID: number;

  @Column({
    name: 'note_title',
    length: 255,
    type: 'nvarchar',
  })
  noteTitle: string;

  @Column({
    name: 'note_body',
    type: 'text',
  })
  noteBody: string;
}
