const links = document.querySelectorAll('.link');
links.forEach(e => {
    e.addEventListener('click', () => {
        links.forEach(el => el.classList.remove('active'));
        e.classList.add('active');
    })
});

// burger

/* ===== Burger Menu ===== */
var menuIcon = document.querySelector(".toggle-menu-icon");
var menuDrawer = document.querySelector(".menu-drawer");
var logo = document.querySelector(".logo-div");
var body = document.querySelector("html")

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    menuDrawer.classList.toggle("open");
    body.classList.toggle("stop-scroll");
});

var drawerLinks = document.querySelectorAll(".nav-link");
drawerLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
        body.classList.toggle("stop-scroll");
    })
});

if (menuIcon.classList.contains("active") === true) {
    body.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        menuDrawer.classList.toggle("open");
        logo.classList.toggle("display-none");
        body.classList.toggle("stop-scroll");
    })
}




const burgerNavLinks = document.querySelectorAll('.burger-nav');

function activeBurgerMenu() {
    let len = sections.length;
    while (--len && window.scrollY < sections[len].offsetTop) {}
    burgerNavLinks.forEach(el => el.classList.remove("active"));
    burgerNavLinks[len].classList.add("active");
};
window.addEventListener("scroll", activeBurgerMenu);

// slider

const sections = document.querySelectorAll(".container")

function show(index) {
    var popupWindow = document.createElement("div");
    popupWindow.classList = "popup";
    popupWindow.innerHTML = `
        <div class="popup-window">
            <img class="popup-pet-img" src="${db[index].img}" alt="puppy">
            <div class="popup-pet-data">

                <div class="popup-pet-title">
                    <div class="popup-pet-name">
                        ${db[index].name}
                    </div>
                    <div class="popup-pet-type">
                        ${db[index].type} - ${db[index].breed}
                    </div>
                </div>

                <div class="popup-pet-about">
                    ${db[index].description}
                </div>

                <div class="popup-pet-stats">
                    <li><b>Age:</b> ${db[index].age}</li>
                    <li><b>Inoculations:</b> ${db[index].inoculations}</li>
                    <li><b>Diseases:</b> ${db[index].diseases}</li>
                    <li><b>Parasites:</b> ${db[index].parasites}</li>
                </div>

            </div>

            <div class="popup-pet-close" onclick="hide()">
                <img src="../../assets/icons/close.svg" alt="close icon">
            </div>
        </div>
    `
    document.querySelector('.item').prepend(popupWindow);
    body.classList.add("stop-scroll");
}

function hideOnOverlayClick() {}

function hide() {
    var popupWindow = document.querySelectorAll(".popup");
    popupWindow.forEach(el => el.remove());
    body.classList.remove("stop-scroll");
}

const BTN_LEFT = document.querySelector(".control-button-prev");
const BTN_RIGHT = document.querySelector(".control-button-next");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
}

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let id = Math.floor(Math.random() * (8))
        const card = createCardTemplate();
        card.innerHTML = `
        <img src="${db[id].img}" alt="puppy">
        <div class="pet-name">${db[id].name}</div>
        <button class="pets-learn-more" onclick="show(${id})">Learn more</button>
        `;
        changedItem.appendChild(card);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})

function changeCardData() {

    const cards = document.querySelectorAll('.card')
    cards.forEach(el => {
        let id = Math.floor(Math.random() * (8))
        el.innerHTML = `
        <img src="${db[id].img}" alt="puppy">
        <div class="pet-name">${db[id].name}</div>
        <button class="pets-learn-more" onclick="show(${id})">Learn more</button>
        `;
    })
}

changeCardData()