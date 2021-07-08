'use strict'

const { Command } = require('@adonisjs/ace')
const Film = use('App/Models/Film')

class Test extends Command {
  static get signature() {
    return 'test'
  }

  static get description() {
    return 'this is a test'
  }

  async handle(args, options) {
    this.info('Dummy test command')

    const one_film = await Film.query().where('film_id', 1).firstOrFail()

    console.log(one_film)


    console.log('====================================')


    const many_films = await Film.all()

    console.log(many_films)

    many_films.forEach(Film => {
      console.log(Film.film_id)
    });
  }
}

module.exports = Test
