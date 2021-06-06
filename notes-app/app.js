const chalk = require('chalk')
const yargs = require('yargs')
const notesUtil = require('./notes.js')

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.addNote(argv.title, argv.body)
    }
})
// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.removeNote(argv.title)
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.readNote(argv.title)
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'Show List of notes',
    handler(){
        notesUtil.listNote()
    }
})

yargs.parse()