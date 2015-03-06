var dataVis = angular.module('dataVis', ['ngWebSocket']);

dataVis.controller('ListController', function($scope, $websocket) {
  $scope.data = [];

  var ws = $websocket('ws://localhost:9090');

  ws.onOpen(function (event) {
    console.log('Hurrah! Connected to the WebSocket server!');
  });

  ws.onMessage(function(event) {
    console.log('The server told us: %o', event.data);
    $scope.data.push(event.data);
  });

  ws.onError(function (event) {
    console.log('Ouch :(');
  });

  ws.onClose(function (event) {
    console.log('Server closed the connection. What to do now?');
  });
});
