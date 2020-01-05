require('seneca')()
    .use('info')
    .listen({
        host: "localhost",
        port: 3002,
        type: "web"
    })