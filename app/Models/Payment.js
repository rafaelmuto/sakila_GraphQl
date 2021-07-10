'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {

    static get table() {
        return 'payment'
    }

    static get primaryKey() {
        return 'payment_id'
    }

    customer() {
        return this.hasOne('App/Models/Customer', 'customer_id', 'customer_id')
    }

    store() {
        return this.hasOne('App/Models/Store', 'store_id', 'store_id')
    }

    staff() {
        return this.hasOne('App/Models/Staff', 'staff_id', 'staff_id')
    }

    static get visible() {
        return [
            'payment_id',
            'customer_id',
            'store_id',
            'staff_id',
            'rental_id',
            'amount',
            'payment_date',
            'last_update'
        ]
    }

}

module.exports = Payment