const {encryptText} = require('../../utils/helper/bcrypt.decrypt')
const {
    registerCompanyDAL
} = require('../DAL/index')

const registerCompanyBL = async(req, res) => {

    try {
        let data = req.body
        console.log("data1", data.registrationKey)
        // if(data.registrationKey = undefined) {
        //     data.registrationKey = "Free";
        //     console.log("registrationKey", data.registrationKey)
        // } else {
        //     data.registrationKey = await encryptText(data.registrationKey)
        // }
        data.password = await encryptText(data.password)
        console.log("data", data)
        let saveCompany = await registerCompanyDAL(data);
        res.locals.rootdata = saveCompany;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompanyBL,
}