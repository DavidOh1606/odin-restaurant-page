import burger from "./images/burger.jpg";
import chicken from "./images/fried-chicken.jpg";
import fries from "./images/fries.jpg";
import salad from "./images/salad.jpg";
import "./styles.css";

const content = document.querySelector("#content");

const nav = document.querySelector("nav");

let selection = null;

nav.addEventListener("click", setSelection);
createHome();

function setSelection(event) {

    if (event.target === selection || event.target === nav) {
        return;
    }
    
    if (selection != null) {
        selection.setAttribute("selected", "false");
    }

    selection = event.target;

    event.target.setAttribute("selected", "true");

    clearContent();
    switch (event.target.id) {
        case "home":
            createHome();
            break;
        
        case "menu":
            createMenu();
            break;

        case "about":
            createAbout();
            break;

        default:
            return;

    }

}

function createHome() {

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

function createMenu(event) {

    const title = document.createElement("div");
    const chickenItem = createMenuItem("Fried Chicken", chicken, "$12.99");
    const friesItem = createMenuItem("French Fries", fries, "$6.99");
    const saladItem = createMenuItem("Salad", salad, "$10.99");

    title.innerText = "Our Menu";
    title.classList.add("title");

    const sodaText = document.createElement("div");
    sodaText.classList.add("soda-text");
    sodaText.innerText = "Soft Drinks - $4.99";

    content.appendChild(title);
    content.appendChild(chickenItem);
    content.appendChild(friesItem);
    content.appendChild(saladItem);
    content.appendChild(sodaText);



    function createMenuItem(name, imgSrc, price) {
        const div = document.createElement("div");
        const nameElement = document.createElement("div");
        const image = document.createElement("img");
        const priceElement = document.createElement("div");

        div.classList.add("menu-item");
        nameElement.classList.add("menu-item-name");
        nameElement.innerText = name;

        image.src = imgSrc;
        image.alt = name;
        image.width = "450";

        priceElement.classList.add("price");
        priceElement.innerText = price;

        div.appendChild(nameElement);
        div.appendChild(image);
        div.appendChild(priceElement);

        return div;
    }
}

function createAbout() {
    const title = document.createElement("div");
    const text = document.createElement("div");
    const phoneNumber = document.createElement("div");
    const email = document.createElement("div");

    title.classList.add("title");
    title.innerText = "About Us";

    text.classList.add("text");
    text.innerText = "We are passionate about creating food that's fast.";

    phoneNumber.classList.add("phone-number");
    phoneNumber.innerText = "(555)-555-5555";

    email.classList.add("email");
    email.innerText = "email@email.com";

    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(phoneNumber);
    content.appendChild(email);
}

function clearContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}