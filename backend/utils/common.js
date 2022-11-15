const common = {


  createResponse: (status, data) => {
    return {
        status: status,
        data,
    };
  },


};

module.exports = common;
