//Global library Arrays
const readShelf = JSON.parse(localStorage.getItem("readShelf")) || [];
const unreadShelf = JSON.parse(localStorage.getItem("unreadShelf")) || [];

//set default library section
let sectionTracker = true;

//Book Constructor
function Book(bookTitle, bookAuthor, BookPages, BookStatus) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.BookPages = BookPages;
  this.BookStatus = BookStatus;
}

function generateLibrary(bookShelf) {
  const library = document.querySelector(".library-grid");
  library.innerHTML = ``;
  let books = ``;
  for (let i = 0; i <= bookShelf.length - 1; i++) {
    books += `
            <div class="book">
                <h2>${bookShelf[i].bookTitle}</h2>
                <p>${bookShelf[i].bookAuthor}</p>
                <p>${bookShelf[i].BookPages}</p>
                <button><i class="fas fa-trash"></i> Delete</button>
            </div>
        `;
  }
  library.innerHTML = books;

  //Set up Delete button functions
  const shelfBooks = document.querySelectorAll(".book");
  shelfBooks.forEach((book) => {
    book.addEventListener("click", deletePressed);
  });
}

function deletePressed(e) {
  if (e.target.matches("button")) {
    const title = this.querySelector("h2").textContent;
    deleteBook(title);
  }
}

function deleteBook(title) {
  const shelf = sectionTracker ? readShelf : unreadShelf;
  const shelfSearch = [...shelf];
  const index = shelfSearch.findIndex((book) => book.bookTitle === title);
  shelf.splice(index, 1);
  if (sectionTracker) {
    localStorage.setItem("readShelf", JSON.stringify(readShelf));
  } else {
    localStorage.setItem("unreadShelf", JSON.stringify(unreadShelf));
  }
  generateLibrary(shelf);
}

function insertBook(e) {
  e.preventDefault();
  const newBookName = this.querySelector("#book-name").value;
  const newBookAuthor = this.querySelector("#book-author").value;
  const newBookPages = this.querySelector("#book-pages").value;
  const newBookStatus =
    this.querySelector("input[name='book-read']:checked").value === "read"
      ? true
      : false;

  const newBook = new Book(
    newBookName,
    newBookAuthor,
    newBookPages,
    newBookStatus
  );

  //check to see if current book section needs to be regenerated
  switch (newBookStatus) {
    case true:
      readShelf.push(newBook);
      localStorage.setItem("readShelf", JSON.stringify(readShelf));
      if (sectionTracker) generateLibrary(readShelf);
      break;
    case false:
      unreadShelf.push(newBook);
      localStorage.setItem("unreadShelf", JSON.stringify(unreadShelf));
      if (!sectionTracker) generateLibrary(unreadShelf);
  }

  this.reset();
}

//Set Event Listeners and Start Application
function start() {
  //Section Change
  const readSection = document.querySelector("#read");
  const unreadSection = document.querySelector("#unread");
  readSection.addEventListener("click", () => {
    unreadSection.classList.remove("selected");
    readSection.classList.add("selected");
    readSection.disabled = true;
    unreadSection.disabled = false;
    sectionTracker = !sectionTracker;
    generateLibrary(readShelf);
  });
  unreadSection.addEventListener("click", () => {
    readSection.classList.remove("selected");
    unreadSection.classList.add("selected");
    unreadSection.disabled = true;
    readSection.disabled = false;
    sectionTracker = !sectionTracker;
    generateLibrary(unreadShelf);
  });

  //Form Function and Book Additions
  const addBookForm = document.querySelector("form");
  addBookForm.addEventListener("submit", insertBook);

  //toggle form visiblity
  const newBookButton = document.querySelector(".insert-book");
  newBookButton.addEventListener("click", () =>
    addBookForm.classList.toggle("show-form")
  );

  generateLibrary(readShelf);
  readSection.disabled = true;
}

window.addEventListener("load", start);
