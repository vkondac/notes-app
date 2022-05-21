const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require("./notes.js");

// customize yargs verison
yargs.version('1.1.0');

//create add command

yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        
    }
})

//create remove command

yargs.command({

    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){

        notes.removeNotes(argv.title);
    }
})

//list command

yargs.command({

    command: 'list',
    describe: 'lists all notes you have',
    handler(argv){

        notes.listNotes();
    }
})

//read command

yargs.command({

    command: 'read',
    describe: 'Reads the note with the given title',
    builder : {
        title : {
            describe: 'shows the note with the coresponding title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){

        notes.readNotes(argv.title);
    }
})




yargs.parse();

