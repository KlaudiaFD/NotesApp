const btnSave=document.querySelector('#btnSave');
let notes;
init();

function init(){
    let out;
    let noteArray=JSON.parse(localStorage.getItem('noteData'));
    
    if(noteArray != null && noteArray != ""){
        noteArray= JSON.parse(localStorage.getItem('noteData'));
        
        for(let x=0; x < noteArray.length; x++){
            out += "<option value=" +x + ">";
            out += noteArray[x].title;
            out += "</option>";
            
            document.querySelector('#noteMaster').innerHTML=out;
        }
        
        document.querySelector('#btnWrite').addEventListener('click', function(e){
            writeNote();
        });
        
        document.querySelector('#noteMaster').addEventListener('click', function(e){
            displayNote(e.target.value);
        });
        
        readNotes();
    } else{
        
        writeNote();
    }
}

function writeNote(){
    document.querySelector('#read').style.display="none";
    document.querySelector('#write').style.display="block";
    document.querySelector('#noteTitle').value="";
    document.querySelector('#noteBody').value="";
};

function readNotes(){
    document.querySelector('#read').style.display="block";
    document.querySelector('#write').style.display="none";
};

function displayNote(note){
    let noteArray= JSON.parse(localStorage.getItem('noteData'));
    let out="<h2>" + noteArray[note].title + "</h2>";
    out += "<h4>Date: " + new Date(noteArray[note].date).toDateString() + "</h4>";
    out += "<p>" + noteArray[note].body + "</p>";
    out += "<button id='btnDelete'> Delete </button>" 
    document.querySelector('#noteDisplay').innerHTML=out;
    document.querySelector('#btnDelete').onclick=function(){
        noteArray.splice(note,1);
        localStorage.setItem('noteData', JSON.stringify(noteArray));
        init();
    }
};

btnSave.onclick=function(){
    const noteDate=new Date();
    const noteTitle= document.querySelector('#noteTitle').value;
    const noteBody= document.querySelector('#noteBody').value;
    const theNote= new Note(noteDate, noteTitle, noteBody);
    saveNotes(theNote);
};

function saveNotes(note){
    let noteArray= JSON.parse(localStorage.getItem('noteData'));
    if(noteArray == null){
        noteArray= new Array();
        noteArray.push(note);
    } else {
        noteArray.push(note)
    }
    localStorage.setItem('noteData', JSON.stringify(noteArray));
    readNotes();
    init();
};
