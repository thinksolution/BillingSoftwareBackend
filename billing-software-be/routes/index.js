const express = require("express");
const router = express.Router();
const successResponseGenrator = require('../utils/helper/sucessResponse');

const {
    registerCompanyController,
} = require('../controller/index')

router.post('/REGISTER', registerCompanyController, successResponseGenrator)

module.exports = router;