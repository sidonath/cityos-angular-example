var dataVis = angular.module('dataVis', []);

dataVis.controller('ListController', function($scope) {
  $scope.data = [];

  var ws = new WebSocket('ws://localhost:9090');

  ws.onopen = function (event) {
    console.log('Hurrah! Connected to the WebSocket server!');
  };

  ws.onmessage = function (event) {
    console.log('The server told us: %o', event.data);

    $scope.data.push(event.data);
    $scope.$apply();
  };

  ws.onerror = function (event) {
    console.log('Ouch :(');
  }

  ws.onclose = function (event) {
    console.log('Server closed the connection. What to do now?');
  }
});
