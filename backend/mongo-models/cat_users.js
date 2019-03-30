const moon = require('mongoose');
const Schema = moon.Schema;

const catSchema = new Schema({
    name: String,
    userIDs: [ Number ],
    desc: String
});

module.exports = moon.model('Category', catSchema);