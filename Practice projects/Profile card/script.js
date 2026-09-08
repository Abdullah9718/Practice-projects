const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const status = document.getElementById("txt");
const card = document.getElementById("card");

addBtn.addEventListener("click", () => {
    txt.textContent = "Friends";
    card.classList.add("is-friend");

    addBtn.style.opacity = "0";
    addBtn.style.transform = "scale(0.8)";

    setTimeout(() => {
        addBtn.style.display = "none";
    }, 400);
});

removeBtn.addEventListener("click", () => {
    txt.textContent = "Stranger";
    card.classList.remove("is-friend");

    addBtn.style.display = "inline-block";

    setTimeout(() => {
        addBtn.style.opacity = "1";
        addBtn.style.transform = "scale(1)";
    }, 10);
});