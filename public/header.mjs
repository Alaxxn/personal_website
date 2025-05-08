import { toHtmlElement } from "./toHtmlElement.mjs";


const main_page = document.querySelector(".main");
const heading = toHtmlElement(`
<div class="heading-container">
    <div class="left">
    <h1>Alan Castillo</h1>
    <nav class="${"hidden-nav"}">
        <a href="index.html">Home</a>
        <a href="favorite_music_albums.html">Favorite Albums List</a>
        <a href="https://github.com/Alaxxn">Projects</a>
    </nav>
    </div>
    <div class="right">
    <label> <input class="dark-mode-button" type="checkbox" autocomplete="off" /> Dark mode </label>
    <button class="menu-button">Menu</button>
    </div>
</div>`);
main_page.prepend(heading);

let visible = false;

// Restore dark mode state from localStorage
const savedMode = localStorage.getItem("dark-mode");
if (savedMode === "true") {
    document.body.classList.add("dark-mode");
    document.querySelector(".dark-mode-button").checked = true;
}


document.querySelector(".menu-button").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    if (visible){
        visible = false;
        nav.classList.replace("visible-nav", "hidden-nav");
    }else{
        visible = true;
        nav.classList.replace("hidden-nav", "visible-nav");
    }
    console.log(visible);
});

document.body.addEventListener("click", (event) => {
    const sourceElement = event.target;
    const button = document.querySelector(".menu-button");
    if (!sourceElement.contains(button)){
        const nav = document.querySelector("nav");
        visible = false;
        nav.classList.replace("visible-nav", "hidden-nav");
    }
});

document.querySelector(".dark-mode-button").addEventListener("change", (event) => {

    if (localStorage.getItem("dark-mode") === "false") {
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");
    }
});


