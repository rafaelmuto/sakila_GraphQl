'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilmText extends Model {

    static get table() {
        return 'film_text'
    }

    film() {
        return this.hasOne('App/Models/Film', 'film_id', 'film_id')
    }

    static get visible() {
        return [
            'film_id',
            'title',
            'description'
        ]
    }

}

module.exports = FilmText