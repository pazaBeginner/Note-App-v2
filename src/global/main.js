const BASE_URL = "https://notes-api.dicoding.dev/v2";

const getNote = async () => {
  const loadingContainer = document.querySelector(".loading-container");
  loadingContainer.style.display = "flex";
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.error) {
      console.log("Terjadi error saat mengambil data");
    } else {
      setTimeout(() => {
        renderNotesAPI(responseJson.data); // Render data setelah loading selesai
      }, 500);
    }

    // Simulasi ketika terjadi error
    // throw new Error("Simulasi error manual!");
  } catch (error) {
    if (error.message.includes("Failed to fetch")) {
      showNotification(
        "⚠️ Gagal terhubung ke server. Periksa koneksi internet Anda.",
        "error"
      );
    } else {
      showNotification(
        "🛑 Terjadi kesalahan! Silakan coba lagi nanti.",
        "error"
      );
    }
    console.error("Error:", error);
  } finally {
    setTimeout(() => {
      loadingContainer.style.display = "none"; // Sembunyikan loading setelah delay
    }, 500);
  }
};

const insertNoteGlobal = async (note) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };
    const response = await fetch(`${BASE_URL}/notes`, options);
    const responseJson = await response.json();
    if (response.ok) {
      showNotification("Catatan berhasil ditambahkan!", "success");
      getNote();
    } else {
      showNotification(
        `Gagal menambahkan catatan: ${responseJson.message}`,
        "error"
      );
    }
  } catch (error) {
    showNotification("Terjadi kesalahan! Periksa koneksi internet.", "error");
  }
};

const deleteNote = async (noteId) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${BASE_URL}/notes/${noteId}`, options);
    const responseJson = await response.json();
    if (response.ok) {
      showNotification("Catatan berhasil dihapus!", "success");
      getNote(); // Reload data setelah berhasil dihapus
    } else {
      showNotification(
        `Gagal menghapus catatan: ${responseJson.message}`,
        "error"
      );
    }
  } catch (error) {
    showNotification("Terjadi kesalahan saat menghapus catatan.", "error");
  }
};

const renderNotesAPI = (notes) => {
  const noteListElement = document.querySelector("article.note-api");
  const noteIsArchived = document.querySelector("archive-list"); // Perbaiki selector
  noteListElement.innerHTML = "";
  noteIsArchived.innerHTML = "";

  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("list-notes");
    noteElement.dataset.noteid = note.id;
    noteElement.innerHTML = `
          <h3 class="title-note">${note.title}</h3>
          <div class="body-note">
              <p>${note.body}</p> 
              <p class="date">${note.createdAt}</p>   
          </div>
          <button class="btn btn-delete" id="${note.id}">Hapus</button>
      `;

    if (note.archived) {
      noteIsArchived.appendChild(noteElement);
    } else {
      noteListElement.appendChild(noteElement);
    }
  });

  const buttonsDelete = document.querySelectorAll(".btn-delete");
  buttonsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", (event) => {
      const bookId = event.target.id;

      deleteNote(bookId);
    });
  });
};

const showNotification = (message, type = "success") => {
  const notification = document.createElement("div");
  notification.classList.add("notification", type);
  notification.textContent = message;

  document.body.appendChild(notification);

  // Hapus notifikasi setelah 3 detik
  setTimeout(() => {
    notification.remove();
  }, 3000);
};

document.addEventListener("DOMContentLoaded", () => {
  getNote();
});

export { getNote, insertNoteGlobal };
