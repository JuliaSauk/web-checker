import serverConfig from './config';
import express from 'express';
import bodyParser from 'body-parser';
import {setupRepeater} from './modules/repeater';

const app = express();

app.use(bodyParser.json({limit: '10mb'}));

const PORT = process.env.PORT || serverConfig.port;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
  setupRepeater();
});