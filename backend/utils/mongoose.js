const mongoose = require('mongoose');
const fs = require('fs');

const { logger } = require('./logger');

const { HTTP_STATUS, ERROR_CODE_KEY} = require('../utils/constant');

let url = `mongodb://${
  process.env.MONGO_USER
}:${
  process.env.MONGO_PASS
}@${
  process.env.MONGO_HOST
}:${
  process.env.MONGO_PROT
}/${
  process.env.MONGO_DB}`;


  // console.log('..url..' + url);

let option = { useNewUrlParser: true, useUnifiedTopology: true };


// Mongoose - only ssl
mongoose
  .connect(url, option)
  .then(() => logger.info('Mongoose Connected to MongoDB...'))
  .catch((err) => logger.error(`Could not connect to MongoDB... ${JSON.stringify(err)}`));



const staffSchema = new mongoose.Schema({
  cooks: {
    monday:[],
    tuesday:[],
    wednesday:[],
    thursday:[],
    friday:[]
  },
  waiters:{}
},{ collection: "staff" });



const mongodb = {
  // payment
  
  getCook: async () => {
    const Staff = mongoose.model('staff', staffSchema);
    try {
      let staff = await Staff.findOne();
      console.log('..staff..' + JSON.stringify(staff));
      return {
        error: null,
        data: staff.cooks,
      };
    } catch (err) {
      return {
        error: {
          code: HTTP_STATUS.INTERNAL_SERVER_ERROR,
          message: ERROR_CODE_KEY.INTERNAL_SERVER_ERROR
        },
        data: null,
      };
    }
  },
  getWaiters: async () => {
    const Staff = mongoose.model('staff', staffSchema);
    try {
      let staff = await Staff.findOne();
      console.log('..staff..' + JSON.stringify(staff));
      return {
        error: null,
        data: staff.waiters,
      };
    } catch (err) {
      return {
        error: {
          code: HTTP_STATUS.INTERNAL_SERVER_ERROR,
          message: ERROR_CODE_KEY.INTERNAL_SERVER_ERROR
        },
        data: null,
      };
    }
  },
  disconnect: () => {
    mongoose.connection.close();
  },
};

module.exports = mongodb;
