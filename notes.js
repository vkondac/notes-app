const fs = require('fs');

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

const removeNotes = function (title){
    const notes = loadNotes();
    for (var i = notes.length - 1; i >= 0; --i) {
        if (notes[i].title == title) {
            notes.splice(i,1);
            
        }
    }
    saveNotes(notes);
}


const listNotes = function (title){
    const notes = loadNotes();
    console.log(notes);
    
}

const readNotes = function (title){
    let bodyNote;
    const notes = loadNotes();
    for (var i = notes.length - 1; i >= 0; --i) {
        if (notes[i].title == title) {
        
          note
            
        }
    }
    
   console.log(bodyNote);
    
}





module.exports = {

addNote : addNote,
removeNotes : removeNotes,
readNotes : readNotes,
listNotes: listNotes

}

