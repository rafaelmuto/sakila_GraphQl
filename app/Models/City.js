'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {

    static get table() {
        return 'city'
    }

    static get primaryKey() {
        return 'city_id'
    }

    country() {
        return this.hasOne('App/Models/Country', 'country_id', 'country_id')
    }

    static get visible() {
        return [
            'city_id',
            'city',
            'country_id',
            'last_update'
        ]
    }
}

module.exports = City