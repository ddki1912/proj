const active = "active";

const addLibra = document.querySelector(".add-js");
const editLibras = document.querySelectorAll(".edit-js");
const deleteLibras = document.querySelectorAll(".delete-js");

const addModal = document.querySelector("#add-modal");
const editModal = document.querySelector("#edit-modal");
const deleteModal = document.querySelector("#delete-modal");

const closeModal = document.querySelectorAll(".modal-close-js");
const modalContent = document.querySelectorAll(".body-content");

function showAddModal() {
    addModal.classList.add(active);
}

function showEditModal() {
    editModal.classList.add(active);
}

function showDeleteModal() {
    deleteModal.classList.add(active);
}

function removeModal() {
    addModal.classList.remove(active);
    editModal.classList.remove(active);
    deleteModal.classList.remove(active);
}

function clickOutToClose(e) {
    e.stopPropagation();
}

addLibra.addEventListener("click", showAddModal);

for (const editLibra of editLibras) {
    editLibra.addEventListener("click", showEditModal);
}

for (const deleteLibra of deleteLibras) {
    deleteLibra.addEventListener("click", showDeleteModal);
}

for (const closeBtn of closeModal) {
    closeBtn.addEventListener("click", removeModal);
}

addModal.addEventListener("click", removeModal);
editModal.addEventListener("click", removeModal);
deleteModal.addEventListener("click", removeModal);

for (const content of modalContent) {
    content.addEventListener("click", clickOutToClose);
}