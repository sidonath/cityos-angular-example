# Introduction to Real-Time Apps with AngularJS

Example code for a lecture at [CityOS Hackathon: Smart
Sarajevo](http://cityos.io/) about using JavaScript on front-end for real-time
visualisation using AngularJS and Highcharts.

The commit history is made as clean as possible and could be followed as a
tutorial.

The demo uses the following libraries:

* [jQuery](http://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [angular-websocket](https://github.com/gdi2290/angular-websocket)
* [Highcharts](http://www.highcharts.com/)
* [highcharts-ng](https://github.com/pablojim/highcharts-ng)

## Running the example

To run the example you need a WebSocket server. A sample server feeding random
data is given in this repo inside `random-feed-server` directory. To run the
server you need to install [Node.js](https://nodejs.org/) or
[IO.js](https://iojs.org/en/index.html) and run `$ npm install`.

After that you can run the sample server with `$ node server.js`.

Simply open `index.html` in your browser to see the random data plotted.
