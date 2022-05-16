const fs = require('fs');
const name = 'Vanja';

const getNotes = function(){

    return 'Your Notes';

}

const loadNotes = function(){


    try {
        const dataBuffer = fs.readFileSync('notes.json');
         const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }

    catch (e) {
        return [];
    }
}

const saveNotes = function(notes){

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
    
    }
    

const addNote = function (title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
        
    })


    if(duplicateNotes.length === 0){

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



module.exports = {

getNotes : getNotes,
addNote : addNote

}

