module.exports = class createUsersTable {
    name = 'createUsersTable'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" text PRIMARY KEY NOT NULL, "name" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
