const moon = require('mongoose');
const Schema = moon.Schema;

const catSchema = new Schema({
    id: Number,
    name: String,
    numUsers: Number,
    userIDs: [ Number ],
    desc: String
});

module.exports = moon.model('Category', catSchema);