// Require the framework and instantiate it
require('dotenv').config();
const fastify = require('fastify')({ logger: true })
const { logger } = require('./utils/logger');
const restaurantController = require('./controllers/v1/restaurant');


// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})
fastify.get('/GetCooks', async (request, reply) => {
  return restaurantController.GetCooks(request,reply);
})
fastify.get('/GetWaiters', async (request, reply) => {
  return restaurantController.GetWaiters(request,reply);
})
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