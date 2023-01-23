const RegistrationModel = require('../mongodb/model/registration.model')

const registerCompany = async (data) => {
    try {
        let isCompanyExist = await RegistrationModel.find(
            { "company_name": data.companyName } || { "contact_number": data.phoneNumber })
        if (!isCompanyExist.length > 0) {
            let companyData = new RegistrationModel(data)
            return companyData.save();
        } else {
            console.log("fired")
            return { "exist": "Company already Register in our Application" }
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompany,
}