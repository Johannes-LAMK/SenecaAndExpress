const routes = {
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
        },
        {
            prefix: "/info",
            pin: "role:info, cmd: info",
            map: {
                info: {
                    GET: true
                }
            }
        }
    ]
};
module.exports = routes;