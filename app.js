var seneca = require("seneca")({ log: 'silent' });
var Express = require("express");
var Web = require("seneca-web");
var app = Express();

let routes = require('./routes/routes');

seneca.use(Web, { adapter: require('seneca-web-adapter-express'), context: app });
seneca.client(3001);
seneca.act('role:web', routes);

app.listen(3000);