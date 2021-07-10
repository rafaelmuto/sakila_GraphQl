'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {

    static get table() {
        return 'customer'
    }

    static get primaryKey() {
        return 'customer_id'
    }

    store() {
        return this.hasOne('App/Models/Store', 'store_id', 'store_id')
    }

    address() {
        return this.hasOne('App/Models/Address', 'address_id', 'address_id')
    }

    static get visible() {
        return [
            'customer_id',
            'store_id',
            'first_name',
            'last_name',
            'email',
            'address_id',
            'active',
            'create_date',
            'last_update'
        ]
    }

}

module.exports = Customer
