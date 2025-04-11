let notes = JSON.parse(localStorage.getItem("notes")) || [];
let isEdit = false;
let editIndex = 0;

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const output = document.getElementById("output");

function readNotes() {
    output.innerHTML = "";

    notes.forEach((note, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
        <span>${note}</span>
        <button onclick = updateNote(${index})>Edit</button>
        <button onclick = deleteNote(${index})>Delete</button>
        </span>
        `;
        output.appendChild(p);
    });
}

function addNotes() {
    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a Notes !");
        return;
    }
    notes.push(value);
    input.value = "";
    saveAndRefresh();
};

function deleteNote(index){
    notes.splice(index,1);
    saveAndRefresh();
}

function updateNote(index) {
    input.value = notes[index];
    isEdit = true;
    editIndex = index;
  }

  addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value === "") {
      alert("Please enter a note!");
      return;
    }

    if (isEdit) {
      notes[editIndex] = value;
      isEdit = false;
      input.value = "";
      saveAndRefresh();
    } else {
      addNotes();
    }
  });

  function saveAndRefresh() {
    localStorage.setItem("notes", JSON.stringify(notes));
    readNotes();
  }

  readNotes();