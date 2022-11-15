module.exports = {
  STATUS: {
    // status for ebanx ms api response
    SUCCESS: 'success',
    FAIL: 'fail',
  },
  HTTP_STATUS: {
    OK: 200,
    ACCEPTED: 202,
    REDIRECT: 303,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    GATEWAY_TIMEEOUT: 508,
  },
  ERROR_CODE_KEY: {
    INVALID_HEADER: 'INVALID_HEADER',
    REQUEST_ERROR: 'REQUEST_ERROR', // invalid parameters
    BAD_REQUEST: 'BAD_REQUEST', // request with invalid syntax
    FORBIDDEN: 'FORBIDDEN',
    NOT_FOUND: 'NOT_FOUND',
    NOT_ACCEPTABLE: 'NOT_ACCEPTABLE',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  },
  CONTENT_TYPE: {
    JSON: 'application/json',
  },
  VERSION: process.env.VERSION || 'v1.0.0',
  APP: 'restaurant',
};
