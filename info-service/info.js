module.exports = function info(options) {
    const info = [{
        routes: [{
                prefix: "/notes",
                pin: "role:notes, cmd: getAllNotes",
                map: {
                    getAllNotes: {
                        GET: true
                    }
                }
            },
            {
                prefix: "/notes",
                pin: "role:notes, cmd: getNoteById",
                map: {
                    getNoteById: {
                        GET: true,
                        suffix: '/:id'
                    }
                }
            },
            {
                prefix: "/notes",
                pin: "role:notes, cmd: notesByCategory",
                map: {
                    notesByCategory: {
                        GET: true,
                        suffix: '/:category'
                    }
                }
            }
        ]
    }];
    this.add('role:info,cmd:info', function getInfo(msg, respond) {
        respond(null, { info })
    });
};