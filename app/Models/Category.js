'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    static get table() {
        return 'category'
    }

    static get primaryKey() {
        return 'category_id'
    }

    static visible() {
        return [
            'category_id',
            'name',
            'last_update'
        ]
    }
}

module.exports = Category