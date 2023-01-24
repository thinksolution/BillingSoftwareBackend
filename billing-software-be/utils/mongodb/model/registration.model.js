const {Schema, model } = require('mongoose')

const schema = new Schema({
    companyName : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    middleName : {
        type: String,
        required: false
    },
    lastName : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    gstNumber : {
        type: String,
        required: false
    },
    registrationKey : {
        type: String,
        required: true
    }
},{timestamps: true});

const _model = model("companies", schema);
module.exports = _model