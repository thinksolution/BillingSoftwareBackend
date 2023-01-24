const indexDao = require('../../utils/mongodb/indexDao');
const { MongoError } = require('../../utils/handler/error/index')

const registerCompanyDAL = async(data) => {

    try {
        let result = await indexDao.registerCompany(data);
        delete data.password;
        return result;
    } catch (error) {
        throw new MongoError(error);
    }

}

module.exports = {
    registerCompanyDAL,
}