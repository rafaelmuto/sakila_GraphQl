'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rental extends Model {

    static get table() {
        return 'rental'
    }

    static get primaryKey() {
        return 'rental_id'
    }

    inventory() {
        return this.hasOne('App/Models/Inventory', 'inventory_id', 'inventory_id')
    }

    customer() {
        return this.hasOne('App/Models/Customer', 'customer_id', 'customer_id')
    }

    staff() {
        return this.hasOne('App/Models/Staff', 'staff_id', 'staff_id')
    }

    static get visible() {
        return [
            'rental_id',
            'rental_date',
            'inventory_id',
            'customer_id',
            'return_date',
            'staff_id',
            'last_update'
        ]
    }

}

module.exports = Rental
