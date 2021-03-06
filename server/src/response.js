"use strict";
exports.__esModule = true;
function createResponse(body, statusCode, headers) {
    if (body === void 0) { body = {}; }
    if (statusCode === void 0) { statusCode = 200; }
    if (headers === void 0) { headers = {}; }
    var baseHeader = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    };
    Object.keys(headers).forEach(function (key) {
        baseHeader[key] = headers[key];
    });
    return {
        body: body,
        statusCode: statusCode,
        headers: baseHeader
    };
}
exports["default"] = createResponse;
