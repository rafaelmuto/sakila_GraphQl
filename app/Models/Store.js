'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Store extends Model {

    static get table() {
        return 'store'
    }

    static get primaryKey() {
        return 'store_id'
    }

    manager() {
        return this.hasOne('App/Models/Staff', 'staff_id', 'staff_id')
    }

    address() {
        return this.hasOne('App/Models/Address', 'address_id', 'address_id')
    }

    static get visible() {
        return [
            'store_id',
            'manager_staff_id',
            'address_id',
            'last_update'
        ]
    }

}

module.exports = Store
