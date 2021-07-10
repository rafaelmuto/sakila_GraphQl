'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {

    static get table() {
        return 'address'
    }

    static get primaryKey() {
        return 'address_id'
    }

    static visible() {
        return [
            'address_id',
            'address',
            'address2',
            'district',
            'city_id',
            'postal_code',
            'phone',
            'location',
            'last_update'
        ]
    }

    getId() {
        return this.address_id
    }
}

module.exports = Address