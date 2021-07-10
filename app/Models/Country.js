'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {

    static get table() {
        return 'country'
    }

    static get primaryKey() {
        return 'country_id'
    }

    static get visible() {
        return [
            'country_id',
            'country',
            'last_update'
        ]
    }
}

module.exports = Country