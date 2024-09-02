import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import rootRoutes from './routes/root.routes';
import { Color } from './color';

const app = new Hono();
const port = 3000;

app.use(logger());
app.route('/', rootRoutes);

serve({
  fetch: app.fetch,
  port,
});

const message =
  `${Color.Orange}${Color.Bold} Hono @ ` +
  `${Color.Underline}http://localhost:${port}${Color.Reset} ` +
  `${Color.Orange}->${Color.Reset} ️‍🔥️‍🔥️‍🔥 ${Color.Reset}`;

console.log(message);
