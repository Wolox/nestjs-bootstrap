module.exports = function (plop) {
  const date = new Date();
  let year = date.getFullYear();
  plop.setGenerator('template', {
    description: 'Template for projects with Nest.js framework',
    prompts: [
      {
        type: 'list',
        name: 'action',
        message: 'Project type',
        choices: ['Backend for frontend', 'MS with MongoDB-Mongoose', 'MS with MySQL-Sequelize', 'MS with PostgreSQL-Sequelize', 'MS with MySQL-TypeORM', 'MS with PostgreSQL-TypeORM'],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Project description',
      },
      {
        type: 'input',
        name: 'projectVersion',
        message: 'Project version (example: 1.0.0 / default 0.0.0)',
        default: '0.0.0',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License project',
        default: 'MIT',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'url repo',
        default: 'https://github.com/example_user/example_repo',
      },
      {
        type: 'input',
        name: 'year',
        default: year,
      },
    ],
    actions: (data) => {
      let actions = [];
      if (data.action === 'Backend for frontend') {
        actions = actions.concat([{
          base: 'templates/bff',
          destination: 'app',
          force: true,
          globOptions: {
            dot: true,
          },
          templateFiles: 'templates/bff/**/*',
          type: 'addMany',
        }]);
      } else if(data.action === 'MS with MongoDB-Mongoose') {
        actions = actions.concat(
          {
            base: 'templates/mongo',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/mongo/**/*',
            type: 'addMany',
          }
        );
      } else if (data.action === 'MS with MySQL-Sequelize') {
        actions = actions.concat(
          {
            base: 'templates/sequelize/mysql',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/sequelize/mysql/**/*',
            type: 'addMany',
          }
        );
      } else if (data.action === 'MS with PostgreSQL-Sequelize') {
        actions = actions.concat(
          {
            base: 'templates/sequelize/postgresql',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/sequelize/postgresql/**/*',
            type: 'addMany',
          }
        );
      } else if (data.action === 'MS with MySQL-TypeORM') {
        actions = actions.concat(
          {
            base: 'templates/typeorm/mysql',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/typeorm/mysql/**/*',
            type: 'addMany',
          }
        );
      } else if (data.action === 'MS with PostgreSQL-TypeORM') {
        actions = actions.concat(
          {
            base: 'templates/typeorm/postgresql',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/typeorm/postgresql/**/*',
            type: 'addMany',
          }
        );
      }
      return actions;
    },
  });
};

