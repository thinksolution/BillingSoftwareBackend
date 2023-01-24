const RegistrationModel = require('../mongodb/model/registration.model');
const { decryptText } = require('../helper/bcrypt.decrypt');

const registerCompany = async (data) => {
    try {
        let isCompanyExist = await RegistrationModel.find({ "phoneNumber": data.phoneNumber })
        if (isCompanyExist.length > 0) {
            return { "exist": "User already exist" };
        } else {
            let companyData = new RegistrationModel(data)
            return companyData.save();
        }
    } catch (error) {
        throw error;
    }
}

const loginCompany = async (data) => {
    try {
        const loginStatus = await RegistrationModel.find({ "email": data.email });
        if (loginStatus.length != 0) {
            const passwordMatch = await decryptText(data.password, loginStatus[0].password);
            if (passwordMatch) {
                let loginResult = loginStatus[0].registrationKey
                return loginResult;
            } else {
                return { "error": "User not Exist" };
            }
        } else {
            return { "error": "User not Exist" };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompany,
    loginCompany,
}