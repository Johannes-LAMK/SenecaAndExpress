module.exports = function notes(options) {
    const notes = [{
            id: 1,
            name: 'First note',
            description: 'This is the first note.',
            created_date: '01.12.2019',
            modified_date: '30.12.2019',
            class: 'low',
            category: 'cat1'
        },
        {
            id: 2,
            name: 'Second note',
            description: 'This is the seconds note.',
            created_date: '01.01.2020',
            modified_date: '30.01.2020',
            class: 'low',
            category: 'cat1'
        },
        {
            id: 3,
            name: 'Third note',
            description: 'This is the third note',
            created_date: '01.02.2020',
            modified_date: '30.02.2020',
            class: 'moderate',
            category: 'cat2'
        },
        {
            id: 4,
            name: 'Fourth note',
            description: 'This is the fourth note',
            created_date: '01.03.2020',
            modified_date: '30.03.2020',
            class: 'critical',
            category: 'cat3'
        },
        {
            id: 5,
            name: 'Fifth note',
            description: 'This is the fifth note',
            created_date: '01.04.2020',
            modified_date: '30.04.2020',
            class: 'critical',
            category: 'cat3'
        },
    ];
    this.add('role:notes,cmd:getAllNotes', function getAllNotes(msg, respond) {
        respond(null, { notes })
    });

    this.add('role:notes, cmd:getNoteById', function getNoteById(msg, respond) {
        let note = notes.find(note => {
            return note.id == msg.args.params.id;
        });
        respond(null, note);
    });

    this.add('role:notes, cmd:notesByCategory', function notesByCategory(msg, respond) {
        let notesByCategory = new Array();
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].category == msg.args.params.category) {
                notesByCategory.push(notes[i]);
            }
        }
        respond(null, notesByCategory);
    });
};