'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Actor extends Model {

    static get table() {
        return 'actor'
    }

    static get primaryKey() {
        return 'actor_id'
    }

    static visible() {
        return [
            'actor_id',
            'first_name',
            'last_name',
            'last_update'
        ]
    }

    getId() {
        return this.actor_id
    }

    getName() {
        return this.first_name + ' ' + this.last_name
    }

}

module.exports = Actor