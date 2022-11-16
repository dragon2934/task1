// Require the framework and instantiate it
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const { logger } = require('./utils/logger');
const restaurantController = require('./controllers/v1/restaurant');


// Declare a route
fastify.register(require('@fastify/cors'), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
})

fastify.register(async function (fastify) {
  fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
  })
  fastify.get('/GetCooks', async (request, reply) => {
    return restaurantController.GetCooks(request,reply);
  })
  fastify.get('/GetWaiters', async (request, reply) => {
    return restaurantController.GetWaiters(request,reply);
  })
});
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: process.env.port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()