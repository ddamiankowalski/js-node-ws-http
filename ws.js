const ws = require('ws');

const Server = ws.Server;
const wss = new Server({ port: 4200 });

wss.on('connection', ws => {
  ws.on('message', message => ws.send('SAMPLE_RESPONSE'))
})