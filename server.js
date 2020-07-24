import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';

const app = express();

app.use(express.static('dist/public'));

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title>React SSR</title>
    </head>
    <body>
      <div id="app">
        ${
    ReactDOMServer.renderToString(
      <App
        techs={['NodeJS', 'ReactJS']}
      />
    )}
      </div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `
  return res.send(html);
});

const port = 3333;

app.listen(port, () => console.log(`Server app on port ${port}`));