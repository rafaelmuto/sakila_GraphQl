'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Language extends Model {

    static get table() {
        return 'language'
    }

    static get primaryKey() {
        return 'language_id'
    }

    static get visible() {
        return [
            'language_id',
            'name',
            'last_update'
        ]
    }

    getId() {
        return this.language_id
    }
}

module.exports = Language