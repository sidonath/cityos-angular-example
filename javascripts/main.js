var dataVis = angular.module('dataVis', ['ngWebSocket', 'highcharts-ng']);

dataVis.factory('IncomingData', function($websocket) {
  var ws = $websocket('ws://localhost:9090'),
      collection = [];

  ws.onOpen(function (event) {
    console.log('Hurrah! Connected to the WebSocket server!');
  });

  ws.onMessage(function(event) {
    console.log('The server told us: %o', event.data);
    var data = Number(event.data);
    collection.push([collection.length, data]);
  });

  ws.onError(function (event) {
    console.log('Ouch :(');
  });

  ws.onClose(function (event) {
    console.log('Server closed the connection. What to do now?');
  });

  var object = {
    collection: collection
  };

  return object;
});

dataVis.controller('ListController', function($scope, IncomingData) {
  $scope.data = IncomingData.collection;
});

dataVis.controller('ChartController', function($scope, IncomingData) {
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'column',
        renderTo: 'chart'
      },
    },
    title: {
      text: 'Flux Capacitor Oscillations per Second'
    },
    xAxis: {
      title: {
        text: 'Second'
      }
    },
    yAxis: {
      title: {
        text: 'Oscillations per Second'
      }
    },
    series: [{ data: [] }]
  };

  $scope.data = IncomingData.collection;

  $scope.$watchCollection('data', function(newData) {
    // Highcharts has a nasty habit of mutating arrays given to it, so we'll give it a copy
    newData = newData.slice(Math.max(0, newData.length - 15));
    $scope.chartConfig.series[0].data = newData;
  });
});
