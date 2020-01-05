require('seneca')()
    .use('notes')
    .listen({
        host: "localhost",
        port: 3001,
        type: "web"
    })