'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilmCategory extends Model {

    static get table() {
        return 'film_category'
    }

    static get visible() {
        return [
            'film_id',
            'category_id',
            'last_update'
        ]
    }

}

module.exports = FilmCategory