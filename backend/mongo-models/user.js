const moon = require('mongoose');
const Schema = moon.Schema;

const _dataSchema = new Schema({
    cnt_airlines: Number,
    cnt_enterntainment: Number,
    cnt_auto_rentals: Number,
    cnt_vehicles: Number,
    cnt_business_serv: Number,
    cnt_clothing_stores: Number,
    cnt_contracted_serv: Number, 
    cnt_direct_marketing: Number,
    cnt_govt_serv: Number,
    cnt_hotel: Number,
    cnt_misc: Number, 
    cnt_personal_serv_prov: Number,
    cnt_repair_serv: Number,
    cnt_retail_stores: Number, 
    cnt_service_prov: Number,
    cnt_transport: Number, 
    cnt_utilities: Number, 
    cnt_wholesale_distributor: Number, 
    tot_tran_cnt: Number, 
    amt_airlines: Number, 
    amt_entertainment: Number,
    amt_auto_rentals: Number, 
    amt_vehicles: Number, 
    amt_business_serv: Number, 
    amt_clothing_stores: Number, 
    amt_contracted_serv: Number,
    amt_direct_marketing: Number, 
    amt_govt_serv: Number, 
    amt_hotel: Number, 
    amt_misc: Number, 
    amt_personal_serv_prov: Number, 
    amt_repair_serv: Number, 
    amt_retail_stores: Number, 
    amt_service_prov: Number, 
    amt_transport: Number, 
    amt_utilities: Number, 
    amt_wholesale_distributor: Number,
    tot_tran_amt: Number, 
    payment: Number
});

const _time_dataSchema = new Schema({
    month: Number,
    year: Number,
    time_data: _dataSchema
});

const _norm_dataSchema = new Schema({ 
    amt_airlines: Number, 
    amt_entertainment: Number,
    amt_auto_rentals: Number, 
    amt_vehicles: Number, 
    amt_business_serv: Number, 
    amt_clothing_stores: Number, 
    amt_contracted_serv: Number,
    amt_direct_marketing: Number, 
    amt_govt_serv: Number, 
    amt_hotel: Number, 
    amt_misc: Number, 
    amt_personal_serv_prov: Number, 
    amt_repair_serv: Number, 
    amt_retail_stores: Number, 
    amt_service_prov: Number, 
    amt_transport: Number, 
    amt_utilities: Number, 
    amt_wholesale_distributor: Number
});

const _norm_time_dataSchema = new Schema({
    month: Number,
    year: Number,
    time_data: _norm_dataSchema
});

const userSchema = new Schema({
    id: Number,
    cat_id = Number,
    data = [ _time_dataSchema ],
    norm_data = [ _norm_time_dataSchema ]
})

module.exports = moon.model('User', userSchema);