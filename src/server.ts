import * as express from 'express';
import * as config from 'config';
import { resolve } from 'path';
import { getLogger } from 'log4js';
import { json } from 'body-parser';

import attachSearchAPI from './api/search/index';
import attachPortalAPI from './api/portal/index';

const logger = getLogger('app');
const app = express();
const port = config.get('port');

attachSearchAPI(app);
attachPortalAPI(app);

app.use(json())
   .use(express.static('./public/www/'))
   .all('/*', (req, res) => {
     res.status(200)
        .set({ 'content-type': 'text/html; charset=utf-8' })
        .sendFile('index.html', {
          root: './public/www'
        });
   })
   .listen(port, () => {
     logger.info(`Server is running at port ${port}...`);
   });