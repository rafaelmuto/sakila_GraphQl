'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Film extends Model {

    static get table() {
        return 'film'
    }

    static get primaryKey() {
        return 'film_id'
    }

    language() {
        return this.hasOne('App/Models/Language', 'language_id', 'language_id')
    }

    static get visible() {
        return [
            'film_id',
            'title',
            'description',
            'release_year',
            'language_id',
            'original_language_id',
            'rental_duration',
            'rental_rate',
            'length',
            'replacement_cost',
            'rating',
            'special_features',
            'last_update'
        ]
    }

    getId() {
        return this.film_id
    }

}

module.exports = Film
