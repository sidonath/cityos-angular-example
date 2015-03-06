$(function() {
  var ws = new WebSocket('ws://localhost:9090');
  var listContainer = $('#listContainer');

  ws.onopen = function (event) {
    console.log('Hurrah! Connected to the WebSocket server!');
  };

  ws.onmessage = function (event) {
    console.log('The server told us: %o', event.data);

    var newListElement = $('<li>', { text: event.data });
    listContainer.append(newListElement);
  };

  ws.onerror = function (event) {
    console.log('Ouch :(');
  }

  ws.onclose = function (event) {
    console.log('Server closed the connection. What to do now?');
  }
});
