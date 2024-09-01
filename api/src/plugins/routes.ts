import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { users } from '../firestore.js';

const routes: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get('/', {}, async (request, reply) => {
    try {
      const u = await users.get();
      return reply.code(200).send(u.docs.map((doc) => doc.data()));
    } catch (error) {
      return reply.code(500).send(error);
    }
  });
};

export default fp(routes);
