import { notesData } from "../local/dataNote-API.js";
import { getNote, insertNoteGlobal } from "../global/main.js";
import "./note-item.js";
import "./header-app.js";

const noteList = document.querySelector(".note-list");
const modal = document.querySelector(".container-modal");
const form = modal.querySelector("#form-note");
const titleInput = form.elements.title;
const noteInput = form.elements.descriptionContent;

function showModal() {
  modal.classList.toggle("active");

  if (modal.classList.contains("active")) {
    modal.querySelector("#close-modal").addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("active");
    });
  }
}

const customValidationUsernameHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Wajib diisi.");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Minimal panjang adalah 3 karakter.");
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity(
      "Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($)."
    );
    return;
  }
};

function generateNoteId() {
  return `notes-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function generatedDate() {
  return `${new Date().toISOString()}`;
}

form.addEventListener("submit", (e) => {
  const valueTitle = titleInput.value;
  const noteValue = noteInput.value;

  const note = {
    title: valueTitle,
    body: noteValue,
  };
  insertNoteGlobal(note);
  form.reset();
  e.preventDefault();
  // addNoteToList(valueTitle, noteValue);
  modal.classList.remove("active");
});

titleInput.addEventListener("change", customValidationUsernameHandler);
titleInput.addEventListener("invalid", customValidationUsernameHandler);
titleInput.addEventListener("blur", (event) => {
  // Validasi isi input
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
});

// menampilkan ke document
notesData.forEach(({ id, title, body, createdAt, archived }) => {
  const noteItem = document.createElement("note-item");
  noteItem.setAttribute("id", id);
  noteItem.setAttribute("title", title);
  noteItem.setAttribute("body", body);
  noteItem.setAttribute("created-at", createdAt);
  noteItem.setAttribute("archived", archived);

  noteList.append(noteItem);
});

export { showModal };
