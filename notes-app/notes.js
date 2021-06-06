const fs =require('fs')
const chalk = require('chalk')

const addNotes = (title, body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note =>note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New Note Added Successfully'))
    }else{
        console.log(chalk.red.inverse('Note is Already Added, If you want to update the Note Please do Update Command'))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note =>note.title === title)

    if(duplicateNotes.length === 0){
        console.log(chalk.red.inverse('There is no note present with that title'))
    }else{
        const updatedNotes = notes.filter(note => note.title !== title)
        saveNotes(updatedNotes)
        console.log(chalk.green.inverse('Note Removed Successfully'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const fetchNote = notes.find(note =>note.title === title)
    if(fetchNote){
        console.log(chalk.inverse(fetchNote.title))
        console.log(fetchNote.body)
    }else{
        console.log(chalk.red.inverse('There is no note present with that title'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.white.inverse("Your Notes: "))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
}
module.exports = {
    addNote: addNotes,
    removeNote: removeNotes,
    readNote: readNotes,
    listNote: listNotes
}
