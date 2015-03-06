var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 9090});

var sendInitialDump = function(ws) {
  for (var i = 0; i < 10; i++) {
    var rnd = Math.floor(Math.random() * 20) + 1;
    ws.send(String(rnd), function(error) {
      if (error) {
        console.log('Ouch :( %s', error);
      } else {
        console.log('Sent!');
      }
    });
  }

  delaySendPackage(ws);
};

var delaySendPackage = function(ws) {
  setTimeout(function() {
    var rnd = Math.floor(Math.random() * 20) + 1;
    ws.send(String(rnd), function(error) {
      if (error) {
        console.log('Ouch :( %s', error);
      } else {
        console.log('Sent!');
        delaySendPackage(ws);
      }
    });
  }, Math.floor(Math.random() * 3000) + 1000);
};

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
      console.log('received: %s', message);
  });

  sendInitialDump(ws);
});
