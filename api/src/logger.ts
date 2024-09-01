import { pino } from 'pino';
import isProduction from './environment.js';

const transport = !isProduction
  ? {
      target: 'pino-pretty',
      options: {
        colorize: true, // Enable colorized output
      },
    }
  : undefined;

const logger = pino({
  level: 'debug',
  transport,
  base: { pid: false },
  timestamp: pino.stdTimeFunctions.isoTime,
  serializers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: (req: any) => {
      return {
        method: req.method,
        url: req.url,
        headers: req.headers,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: (res: any) => {
      return {
        statusCode: res.statusCode,
        body: res.body,
      };
    },
  },
});

export default logger;
