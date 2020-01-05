var seneca = require("seneca")({ log: 'silent' });
var Express = require("express");
var Web = require("seneca-web");
var app = Express();

let routes = require('./routes/routes');

seneca.use(Web, { adapter: require('seneca-web-adapter-express'), context: app });
seneca.client({ port: 3001, pin: { role: "notes" } });
seneca.client({ port: 3002, pin: { role: "info" } });
seneca.act('role:web', routes);

app.listen(3000);