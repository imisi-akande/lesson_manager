module.exports = {
  development: {
  url: 'postgres://AkandeImisioluwa@localhost:5432/lesson_notes',
  dialect: 'postgres',
  operatorsAliases: false
},
  production: {
  url: process.env.DATABASE_URL,
  dialect: 'postgres'
},
  staging: {
  url: process.env.DATABASE_URL,
  dialect: 'postgres'
},
  test: {
  url: process.env.DATABASE_URL || 'postgres://AkandeImisioluwa@localhost:5432/lesson_notes_test',
  dialect: 'postgres'
}
};