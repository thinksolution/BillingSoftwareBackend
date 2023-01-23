module.exports = (error, res, req) => {
    console.log(error)
    error.statusCode = error.statusCode || 500
    let response = {
        success : false,
        displayMessage : error.displayMessage || "Sorry! We could not process your request",
        err_type : error.name,
        message : error.message,
        description : error.description,
        errorObj : error.errObj || {}
    }

    res.status(error.statusCode).send(response)
    return
}