const { default: chalk } = require('chalk');
const fs = require('fs');

const loadNotes = () => {


    try {
        const dataBuffer = fs.readFileSync('notes.json');
         const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }

    catch (e) {
        return [];
    }
}

const saveNotes = (notes) =>{

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
    
    }
    

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)
       
    
    if(!duplicateNote){

        notes.push({
            title: title,
            body: body
    
        });
        saveNotes(notes);
        console.log('New note added!');
    }
    else {
        console.log('Note title already exists!');
       

    }

}

const removeNotes = (title) => {
    const notes = loadNotes();
    for (var i = notes.length - 1; i >= 0; --i) {
        if (notes[i].title == title) {
            notes.splice(i,1);
          
        }
    }
    saveNotes(notes);
    
}


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgBlueBright('Your Notes:'))
   notes.forEach((note) => {
       console.log(note.title);
   })
        
}

const readNotes = (title) => {

    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }
    else{
        console.log(chalk.inverse("No note under that title"))
    }


}

module.exports = {

addNote : addNote,
removeNotes : removeNotes,
readNotes : readNotes,
listNotes: listNotes

}

