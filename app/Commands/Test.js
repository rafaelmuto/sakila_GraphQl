'use strict'

const _ = require('lodash')

const { Command } = require('@adonisjs/ace')
const Film = use('App/Models/Film')
const Actor = use('App/Models/Actor')

class Test extends Command {
  static get signature() {
    return 'test'
  }

  static get description() {
    return 'this is a test'
  }

  async handle(args, options) {
    this.info('Dummy test command')

    const film = await Film.query().where('film_id', 1).with('language').firstOrFail()

    console.log(film.getId(), film.title)

    const film_language = await film.language().fetch()

    console.log(film_language.getId(), film_language.name)

    console.log('====================================')


    const actor = await Actor.query().where('actor_id', 1).firstOrFail()

    console.log(actor.getId(), actor.getName())

  }
}

module.exports = Test
