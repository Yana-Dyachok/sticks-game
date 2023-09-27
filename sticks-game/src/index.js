import "./utils/create.js";
import {
  containerBtnFirstPlayer,
  containerBtnSecondPlayer,
  rebootButton,
  rulesButton,
  createPopUp,
  sticksNumber
} from "./utils/create.js";

import './css/style.css';

// delete sticks --------------------------------------------------------------------------------------------------

const stickBlock = document.querySelectorAll(".stick-block");
let sticksLeft = [];

function deleteRandomSticks(array, n) {
  let count = 0;
  while (count < n) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array[randomIndex];
    if (
      element &&
      !element.classList.contains("removed") &&
      !sticksLeft.includes(element)
    ) {
      element.firstElementChild.firstElementChild.hidden=false;
      setTimeout(() => element.classList.add("removed"), 1500);
      element.style.animation = "stickAnimation 2s ease-out";
      count++;
      sticksLeft.push(element);
    }
  }
}

function getBtnDeleteSticks(player) {
  player.children[1].addEventListener("click", () => {
    sticksLeft.length < sticksNumber
      ? deleteRandomSticks(stickBlock, 1)
      : (player.children[1].disabled = true);
    if (!player.children[1].disabled) getPlayerTurn(player);
  });

  player.children[2].addEventListener("click", () => {
    sticksLeft.length < (sticksNumber-1)
      ? deleteRandomSticks(stickBlock, 2)
      : (player.children[2].disabled = true);
    if (!player.children[2].disabled) getPlayerTurn(player);
  });

  player.children[3].addEventListener("click", () => {
    sticksLeft.length < (sticksNumber-2)
      ? deleteRandomSticks(stickBlock, 3)
      : (player.children[3].disabled = true);
    if (!player.children[3].disabled) getPlayerTurn(player);
  });
}

function getPlayerTurn(player) {
  player.style.pointerEvents = "none";
  if (player === containerBtnFirstPlayer) {
    containerBtnSecondPlayer.style.pointerEvents = "auto";
    containerBtnSecondPlayer.firstElementChild.classList.add("active-player");
  } else {
    containerBtnSecondPlayer.style.pointerEvents = "none";
    containerBtnSecondPlayer.firstElementChild.classList.remove(
      "active-player"
    );
  }
  if (player === containerBtnSecondPlayer) {
    containerBtnFirstPlayer.style.pointerEvents = "auto";
    containerBtnFirstPlayer.firstElementChild.classList.add("active-player");
  } else {
    containerBtnFirstPlayer.style.pointerEvents = "none";
    containerBtnFirstPlayer.firstElementChild.classList.remove("active-player");
  }
  if (sticksLeft.length ===sticksNumber) {
    setTimeout(() => showWinner(), 1000);
  }
}

function showWinner() {
  containerBtnFirstPlayer.firstElementChild.classList.contains("active-player")
    ? createPopUp(`Congratulations! ${containerBtnSecondPlayer.firstElementChild.innerHTML} won!`)
    : createPopUp(`Congratulations! ${containerBtnFirstPlayer.firstElementChild.innerHTML} won!`);
}

getBtnDeleteSticks(containerBtnFirstPlayer);
getBtnDeleteSticks(containerBtnSecondPlayer);

//reload new game------------------------------------------------------------------------------------------------------------------------------------------------------------------------
rebootButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

//rules---------------------------------------------------------------------------------------------------------------
const rules="You need to remove sticks, press the drop buttons in turn, where: drop 1-remove 1 stick, drop 2 - 2 sticks and drop 3 -3 sticks, the last one to remove the sticks is the winner. If you want to start the game from the beginning, click on the button 'reload'.";
rulesButton.addEventListener('click',()=>createPopUp(rules))