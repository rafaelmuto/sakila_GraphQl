'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Staff extends Model {

    static get table() {
        return 'staff'
    }

    static get primaryKey() {
        return 'staff_id'
    }

    address() {
        return this.hasOne('App/Models/Address', 'address_id', 'address_id')
    }

    store() {
        return this.hasOne('App/Models/Store', 'store_id', 'store_id')
    }

    static get visible() {
        return [
            'staff_id',
            'first_name',
            'last_name',
            'address_id',
            'picture',
            'email',
            'store_id',
            'active',
            'username',
            'password',
            'last_update'
        ]
    }

}

module.exports = Staff
