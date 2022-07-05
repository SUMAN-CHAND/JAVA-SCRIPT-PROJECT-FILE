// console.log("Welcome to Notes App.");
shownotes();

// if user add a notes, add it to the localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtex = document.getElementById("addtex");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notesobj);
    shownotes();
})
// function to show all the notes
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;

    });
    let noteselm = document.getElementById('notes');
    if (notesobj.lenght != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show! use add note section to add notes`
    }
}

//function to delete a notes
function deletenote(index) {
    // console.log("I am deleteing", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    } 
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
//this is search porsain;
let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    // console.log("search function is fired!",inputval);
    let notecards=document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})

/* 
Further Feature
1. add Title
2. Mark Note as important
3. separate note by user
4. sync and host with a web server
*/