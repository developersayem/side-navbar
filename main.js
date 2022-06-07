const menu = document.querySelector("#menu-icon");
const nav = document.querySelector("nav");
const logo = document.querySelector("logo");
const itemHover1 = document.querySelector("#item1");
const itemHover2 = document.querySelector("#item2");
const itemHover3 = document.querySelector("#item3");
const itemHover4 = document.querySelector("#item4");

menu.addEventListener("click", (e) => {
    nav.classList.toggle("mini-nav");
    return true;
});

itemHover1.addEventListener("click", () => {
    itemHover1.classList.add("item-hover");
    itemHover2.classList.remove("item-hover");
    itemHover3.classList.remove("item-hover");
    itemHover4.classList.remove("item-hover");
});
itemHover2.addEventListener("click", () => {
    itemHover1.classList.remove("item-hover");
    itemHover2.classList.add("item-hover");
    itemHover3.classList.remove("item-hover");
    itemHover4.classList.remove("item-hover");
});
itemHover3.addEventListener("click", () => {
    itemHover1.classList.remove("item-hover");
    itemHover2.classList.remove("item-hover");
    itemHover3.classList.add("item-hover");
    itemHover4.classList.remove("item-hover");
});
itemHover4.addEventListener("click", () => {
    itemHover1.classList.remove("item-hover");
    itemHover2.classList.remove("item-hover");
    itemHover3.classList.remove("item-hover");
    itemHover4.classList.add("item-hover");
});