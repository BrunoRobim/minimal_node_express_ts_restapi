import dotenv from 'dotenv';
import express, { Express } from 'express';

const app: Express = express();
dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log('server running in port:', port);
});

app.get('/', (req, res) => {
  return res.json({
    title: 'Minimal NodeJS REST API',
    obs: 'Using typescript',
    port: `${port}`,
    host: 'Localhost',
  });
});
