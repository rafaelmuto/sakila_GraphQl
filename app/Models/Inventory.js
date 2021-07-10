'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventory extends Model {

    static get table() {
        return 'inventory'
    }

    film() {
        return this.hasOne('App/Models/Film', 'film_id', 'film_id')
    }

    store() {
        //return this.hasOne('App/Models/Store', 'store_id', 'store_id')
    }

    static get visible() {
        return [
            'inventory_id',
            'film_id',
            'store_id',
            'last_update'
        ]
    }

}

module.exports = FilmText