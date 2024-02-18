import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from './note.controller';
import { NoteService } from './note.sevice';

describe('NoteController', () => {
  let controller: NoteController;
  let service: NoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [
        {
          provide: NoteService,
          useValue: {
            create: jest.fn(),
            list: jest.fn(),
            show: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<NoteController>(NoteController);
    service = module.get<NoteService>(NoteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should be able to create a note', async () => {
    const params: any = {
      noteTitle: 'Sample title',
      noteBody: 'Sample body',
    };
    const expectedResult: any = {
      result: {
        noteTitle: 'Sample title 22344',
        noteBody: 'Sample body',
        noteID: 6,
      },
    };

    jest.spyOn(service, 'create').mockImplementation(() => expectedResult);

    expect(await service.create(params)).toStrictEqual(expectedResult);
  });

  it('should be able to return list of notes', async () => {
    const expectedResult: any = {
      result: [
        {
          noteID: 3,
          noteTitle: 'Sample title 333',
          noteBody: 'Sample body',
        },
        {
          noteID: 4,
          noteTitle: 'Sample title 333555',
          noteBody: 'Sample body',
        },
        {
          noteID: 5,
          noteTitle: 'Sample title 22344',
          noteBody: 'Sample body',
        },
        {
          noteID: 6,
          noteTitle: 'Sample title 22344',
          noteBody: 'Sample body',
        },
      ],
    };

    jest.spyOn(service, 'list').mockImplementation(() => expectedResult);

    expect(await service.list()).toStrictEqual(expectedResult);
  });

  it('should be able to update a note', async () => {
    const expectedResult: any = {
      result: {
        noteID: 4,
        noteTitle: 'Sample title 333555',
        noteBody: 'Sample body',
      },
    };

    jest.spyOn(service, 'update').mockImplementation(() => expectedResult);

    expect(
      await service.update(
        { id: 1 },
        {
          noteTitle: 'Sample title 333555',
          noteBody: 'Sample body',
        },
      ),
    ).toStrictEqual(expectedResult);
  });

  it('should be able to show a note', async () => {
    const expectedResult: any = {
      result: {
        noteID: 4,
        noteTitle: 'Sample title 333555',
        noteBody: 'Sample body',
      },
    };

    jest.spyOn(service, 'show').mockImplementation(() => expectedResult);

    expect(await service.show({ id: 1 })).toStrictEqual(expectedResult);
  });

  it('should be able to show a note', async () => {
    const expectedResult: any = {
      result: {
        noteID: 4,
        noteTitle: 'Sample title 333555',
        noteBody: 'Sample body',
      },
    };

    jest.spyOn(service, 'remove').mockImplementation(() => expectedResult);

    expect(await service.remove({ id: 1 })).toStrictEqual(expectedResult);
  });
});
