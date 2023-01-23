const indexDao = require('../../utils/mongodb/indexDao');
const { MongoError } = require('../../utils/handler/error/index')

const registerCompanyDAL = async(reqBody) => {

    try {
        let result = await indexDao.registerCompany(reqBody);
        return result;
    } catch (error) {
        throw new MongoError(error);
    }

}

module.exports = {
    registerCompanyDAL,
}