const active = "active";

const reader = document.querySelector(".reader-js");
const readerList = document.querySelector(".reader-content-js");
const books = document.querySelector(".books-js");
const booksList = document.querySelector(".books-content-js");

function showReaderList() {
    readerList.classList.add(active);
    reader.classList.add(active);
}

function showBooksList() {
    booksList.classList.add(active);
    books.classList.add(active);
}

function removeReaderList() {
    readerList.classList.remove(active);
    reader.classList.remove(active);
}

function removeBooksList() {
    booksList.classList.remove(active);
    books.classList.remove(active);
}
reader.addEventListener("click", showReaderList);
reader.addEventListener("click", removeBooksList);
books.addEventListener("click", showBooksList);
books.addEventListener("click", removeReaderList);


const readerAdd = document.querySelector(".reader-add-js");
const readerEdit = document.querySelectorAll(".reader-edit-js");
const readerDel = document.querySelectorAll(".reader-delete-js");
const borrowBtn = document.querySelectorAll(".borrow-js");
const returnBtn = document.querySelectorAll(".return-btn");
const readerAddModal = document.querySelector(".reader-add-modal");
const readerEditModal = document.querySelector(".reader-edit-modal");
const readerDelModal = document.querySelector(".reader-delete-modal");
const borrowModal = document.querySelector(".borrow-modal");
const returnModal = document.querySelector(".return-modal");

const booksAdd = document.querySelector(".books-add-js");
const booksEdit = document.querySelectorAll(".books-edit-js");
const booksAddModal = document.querySelector(".books-add-modal");
const booksEditModal = document.querySelector(".books-edit-modal");

const closeModal = document.querySelectorAll(".modal-close-js");
const modalContent = document.querySelectorAll(".body-content");


function showAddReaderModal() {
    readerAddModal.classList.add(active);
}
function showEditReaderModal() {
    readerEditModal.classList.add(active);
}

function showDelReaderModal() {
    readerDelModal.classList.add(active);
}

function showBorrowModal() {
    borrowModal.classList.add(active);
}

function showReturnModal() {
    returnModal.classList.add(active);
}

function showAddBooksModal() {
    booksAddModal.classList.add(active);
}

function showEditBooksModal() {
    booksEditModal.classList.add(active);
}

function removeModal() {
    readerAddModal.classList.remove(active);
    readerEditModal.classList.remove(active);
    readerDelModal.classList.remove(active);
    borrowModal.classList.remove(active);
    returnModal.classList.remove(active);
    booksAddModal.classList.remove(active);
    booksEditModal.classList.remove(active);
}

function clickOutToClose(e) {
    e.stopPropagation();
}

readerAdd.addEventListener("click", showAddReaderModal);

for (const edit of readerEdit) {
    edit.addEventListener("click", showEditReaderModal);
}

for (const del of readerDel) {
    del.addEventListener("click", showDelReaderModal);
}

for (const borrow of borrowBtn) {
    borrow.addEventListener("click", showBorrowModal);
}

for (const ret of returnBtn) {
    ret.addEventListener("click", showReturnModal);
}

booksAdd.addEventListener("click", showAddBooksModal);

for (const edit of booksEdit) {
    edit.addEventListener("click", showEditBooksModal);
}

for (const modal of closeModal) {
    modal.addEventListener("click", removeModal);
}

readerAddModal.addEventListener("click", removeModal);
readerEditModal.addEventListener("click", removeModal);
readerDelModal.addEventListener("click", removeModal);
borrowModal.addEventListener("click", removeModal);
returnModal.addEventListener("click", removeModal);
booksAddModal.addEventListener("click", removeModal);
booksEditModal.addEventListener("click", removeModal);

for (const content of modalContent) {
    content.addEventListener("click", clickOutToClose);
}
