import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import rootRoutes from './routes/root.routes';

enum AnsiColor {
  Reset = '\x1b[0m',
  Bold = '\x1b[1m',
  Underline = '\x1b[4m',
  Orange = '\x1b[38;2;255;165;0m',
}

const app = new Hono();

app.use(logger());
app.route('/', rootRoutes);

const port = 3000;
serve({
  fetch: app.fetch,
  port,
});

console.log(`
${AnsiColor.Orange}${AnsiColor.Bold} Hono @ ${AnsiColor.Underline}http://localhost:${port}${AnsiColor.Reset} ${AnsiColor.Orange}->${AnsiColor.Reset} ️‍🔥️‍🔥️‍🔥 ${AnsiColor.Reset}
`);
