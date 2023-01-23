const sendFailResponse = require('../utils/helper/failResponse');
const {registerCompanyBL} = require('../services/BL/index')

const registerCompanyController = async (req, res, next) => {

    try {
        await registerCompanyBL(req, res);
        next()        
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}

module.exports = {
    registerCompanyController,
}