export let sticksNumber = 20;
const header = document.createElement("header"),
  title = document.createElement("h1");
title.classList.add(".title");
title.innerText = "Welcome to the game of sticks!!!";
header.appendChild(title);
document.body.appendChild(header);

const main = document.createElement("main");
document.body.appendChild(main);

export function createMatchstickBlocks(count) {
  const container = document.createElement("div");
  container.classList.add("sticks-container");

  for (let i = 0; i < count; i++) {
    const stickBlock = document.createElement("div");
    stickBlock.classList.add("stick-block");

    const match = document.createElement("div");
    match.classList.add("match");

    const fire = document.createElement("div");
    fire.classList.add("fire");
    fire.hidden=true;
  
    const top = document.createElement("div");
    top.classList.add("top");

    const stick = document.createElement("div");
    stick.classList.add("stick");

    match.appendChild(fire);
    match.appendChild(top);
    match.appendChild(stick);

    stickBlock.appendChild(match);
    container.appendChild(stickBlock);
  }

  main.appendChild(container);
}

createMatchstickBlocks(sticksNumber);

export function createButtons(container) {
  for (let i = 0; i < 3; i++) {
    const buttonDrop = document.createElement("button");
    buttonDrop.classList.add("drop-button");
    buttonDrop.innerText = `drop ${i + 1}`;
    container.appendChild(buttonDrop);
  }
}

const allBtnContainer = document.createElement("div");
allBtnContainer.classList.add("all-btn-container");
export const containerBtnFirstPlayer = document.createElement("div");
export const containerBtnSecondPlayer = document.createElement("div");

function getButtons(player, number) {
  player.classList.add(`container-btn-${number}-player`);

  const playerTitle = document.createElement("h2");
  playerTitle.classList.add("player-title");
  number = number.charAt(0).toUpperCase() + number.slice(1);
  playerTitle.innerText = `${number} player`;
  player.appendChild(playerTitle);

  createButtons(player);
  allBtnContainer.appendChild(player);
}

getButtons(containerBtnFirstPlayer, "first");
getButtons(containerBtnSecondPlayer, "second");
main.appendChild(allBtnContainer);
document.body.appendChild(main);

const footer = document.createElement("footer");
footer.classList.add("footer");

export const rulesButton = document.createElement("button");
rulesButton.classList.add("rules-btn");
rulesButton.innerText = "rules";
footer.appendChild(rulesButton);

const authorBlock= document.createElement("div");
authorBlock.classList.add("author-block");
const github = document.createElement("a");
github.href ="https://github.com/Yana-Dyachok";
const img= document.createElement("img");
img.classList.add("github-icon");
img.src='../public/icons8-github.svg';
img.width = 50; 
img.height = 50; 
github.appendChild(img);
const author= document.createElement("p");
author.classList.add("author");
author.textContent='Created by Kukharets';
authorBlock.appendChild(github);
authorBlock.appendChild(author);
footer.appendChild(authorBlock);

export const rebootButton = document.createElement("button");
rebootButton.classList.add("reboot-btn");
rebootButton.innerText = "reload";
footer.appendChild(rebootButton);
document.body.appendChild(footer);

/*create popup */
export function createPopUp(text) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupBody = document.createElement("div");
  popupBody.classList.add("popup-body");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const popupText = document.createElement("div");
  popupText.classList.add("popup-text");
  popupText.textContent = text;

  const closeButton = document.createElement("button");
  closeButton.classList.add("popup-close-btn");
  closeButton.textContent = "Ok";

  closeButton.addEventListener("click", () => {
    popup.classList.toggle("target");
  });

  popupContent.appendChild(popupText);
  popupContent.appendChild(closeButton);

  popupBody.appendChild(popupContent);

  popup.appendChild(popupBody);
  document.body.appendChild(popup);
}