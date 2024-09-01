import Fastify from 'fastify';
import logger from './logger.js';
import routes from './plugins/routes.js';

const server = Fastify({ logger });

server.register(routes);

const serve = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

serve();
