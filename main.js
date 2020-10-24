let $notesArea;
let $add;
let $newNotes;
let $notesList;
let $idNumber=0;
let $allNotes;




const main=()=>{
    prepareDOMElements();
    prepareDOMEvents();
};


const prepareDOMElements=()=>{
    $notesArea=document.querySelector('.notesArea');
    $add=document.querySelector('add');
    $newNotes=document.querySelector('.newNotes');

    $edit=document.querySelector('.edit');

}

const prepareDOMEvents=()=>{
    $add.addEventListener('click', addNewNotes);
}


const addNewNotes=()=>{
    if($notesArea.value !==''){
        $idNumber++;
        $newNotes=document.createElement('container');
        $newNotes.innerText=$notesArea.value;
        $newNotes.setAttribute('id',`container-${$idNumber}`);
        $newNotes.appendChild($newNotes);

        $notesArea.value='';

    }else{
        alert=" Nie wpisano żadnej treści."
    }
};

const enterCheck=()=>{
    if(event.keyCode===13){
        addNewNotes();
    }
};

const 