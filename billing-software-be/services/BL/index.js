const {encryptText} = require('../../utils/helper/bcrypt.decrypt')
const {
    registerCompanyDAL
} = require('../DAL/index')

const registerCompanyBL = async(req, res) => {

    try {
        let data = req.body
        // if(data.registrationKey = undefined) {
        //     data.registrationKey = 'Free'
        //     return data.registrationKey
        // } 
        // else {
        //     data.registrationKey = data.registrationKey
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