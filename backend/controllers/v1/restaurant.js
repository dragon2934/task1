'use strict';

// const exampleServer = require('../../services/example_server');
const common = require('../../utils/common');
const dbService = require('../../services/db_service');
const {logger} = require('../../utils/logger');
const { HTTP_STATUS } = require('../../utils/constant');
const restaurantController = {

    GetCooks: async (req, res) => {
        try {
            const result = await dbService.GetCooks();
            return common.createResponse(HTTP_STATUS.OK, result);
        } catch (e) {
            logger.error(e.message);
            return common.createResponse(HTTP_STATUS.BAD_REQUEST, e);
        }
    },
    GetWaiters: async (req, res) => {
        try {
            const result = await dbService.GetWaiters();
            return common.createResponse(HTTP_STATUS.OK, result);
        } catch (e) {
            logger.error(e.message);
            return common.createResponse(HTTP_STATUS.BAD_REQUEST, e);
        }
    }

}

module.exports = restaurantController;
