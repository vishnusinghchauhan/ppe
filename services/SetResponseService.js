var setSuccess = function(message, object, isSuccess) { //todo:need to delete
    var response = {}
    response.message = message;
    response.data = object;
    response.success = isSuccess;
    return response;
}
var setError = function(errorStatus, message) {//todo: need to delete
    var error = {};
    error.success = errorStatus;
    error.message = message;
    return error;
}
var setResponse = function(message, object, isSuccess,statusCode) {
    var response = {}
    response.message = message;
    response.data = object;
    response.success = isSuccess;
    response.statusCode = statusCode
    return response;
}

module.exports = {
    setSuccess: setSuccess,
    setError: setError,
    setResponse:setResponse
}