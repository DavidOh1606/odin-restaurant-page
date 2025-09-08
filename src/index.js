import burger from "./images/burger.jpg";
import "./styles.css";

const content = document.querySelector("#content");

const nav = document.querySelector("nav");

let selection = null;

nav.addEventListener("click", setSelection);

function setSelection(event) {

    if (event.target.classList.contains("selected") || event.target == nav) {
        return;
    }
    
    if (selection != null) {
        selection.setAttribute("selected", "false");
    }

    selection = event.target;

    createHome(event);
}


function createHome(event) {
    event.target.setAttribute("selected", "true");

    const title = document.createElement("div");
    const image = document.createElement("img");
    const quote = document.createElement("div");
    const quoteText = document.createElement("div");
    const quotee = document.createElement("div");
    const hours = document.createElement("div");

    title.classList.add("title");
    title.innerText = "Generic Fast Food";
    image.src = burger;
    image.width = "450";
    image.alt = "burger";
    quote.classList.add("quote");

    quoteText.classList.add("quote-text");
    quoteText.innerText = `"Food that's made fast."`;
    quotee.classList.add("quotee");
    quotee.innerText = "- CEO";

    quote.appendChild(quoteText);
    quote.appendChild(quotee);

    hours.classList.add("hours-text");
    hours.innerHTML = "Now Open <em>24/7</em>!";

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(quote);
    content.appendChild(hours);
}

// function create
