const {
    registerCompanyDAL
} = require('../DAL/index')

const registerCompanyBL = async(req, res) => {

    try {
        let saveCompany = await registerCompanyDAL(req.body);
        res.locals.rootdata = saveCompany;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompanyBL,
}