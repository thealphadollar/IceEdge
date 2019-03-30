const moon = require('mongoose');
const Schema = moon.Schema;

const _data = new Schema({
    month: Number,
    year: Number,
    total_spent: Number,
    total_count: Number,
    per_transaction: Number
});

const sectorSchema = new Schema({
    name: String,
    data: [ _data ],
    total_expense: Number,
    total_purchases: Number
});

module.exports = moon.model('Sector', sectorSchema);