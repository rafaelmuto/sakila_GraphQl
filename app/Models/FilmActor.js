'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilmActor extends Model {

    static get table() {
        return 'film_actor'
    }

    static get visible() {
        return [
            'actor_id',
            'film_id',
            'last_update'
        ]
    }

}

module.exports = FilmActor
