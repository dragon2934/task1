const mongodb = require('../utils/mongoose');


const dbService = {

    GetCooks: async () =>{
        return mongodb.getCook();
    },
    GetWaiters: async () =>{
        return mongodb.getWaiters();
    }
    
}
module.exports = dbService;