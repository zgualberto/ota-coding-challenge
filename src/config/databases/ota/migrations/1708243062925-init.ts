import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1708243062925 implements MigrationInterface {
    name = 'Init1708243062925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notes" ("note_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "note_title" nvarchar(255) NOT NULL, "note_body" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notes"`);
    }

}
