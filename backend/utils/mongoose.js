const mongoose = require('mongoose');
const fs = require('fs');

const { logger } = require('./logger');

const { HTTP_STATUS, ERROR_CODE_KEY} = require('../utils/constant');
const { CooksData, WaitersData } = require('../data/data');

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

//check record


const staffSchema = new mongoose.Schema({
  cooks: {},
  waiters:{}
},{ collection: "staff" });

const Staff = mongoose.model('staff', staffSchema);

var query = Staff.find();
query.count(function (err, count) {
    if (err) console.log(err)
    else if( count === 0){
      //insert a record
      const data = {
        cooks: CooksData,
        waiters: WaitersData
      }
      const itemTobeSaved = new Staff(data);
      itemTobeSaved.save().then(resp=>{

      }).catch(error =>{

      });
    }
});

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
