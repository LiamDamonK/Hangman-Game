const Letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Questions = [
  ["S", "P", "R", "I", "N", "G", "B", "O", "K", "S"],
  ["E", "X", "E", "C", "U", "T", "I", "O", "N", "E", "R"],
  ["J", "A", "A", "Z"],
  ["M", "I", "S", "C", "H", "I", "E", "V", "O", "U", "S"],
  ["L", "A", "Y", "S"],
  ["H", "A", "R", "R", "Y", "P", "O", "T", "T", "E", "R"],
  ["D", "I", "S", "C", "O", "V", "E", "R", "Y"],
  ["G", "R", "A", "T", "I", "T", "U", "D", "E"],
];
const Descriptions = [
  ["Rugby Team"],
  ["Person Who Carries Out A Sentence"],
  ["Type of music genre"],
  ["Being Naughty"],
  ["Type of Potato Chips"],
  ["Wizard"],
  ["Learning something new"],
  ["Being Thankful"],
];

var RQuestion;
var FQuestion;
var RandomNumber;
var Wins = 0;
var Live = 5;

var RandomQuestion = function () {
  RandomNumber = Math.floor(Math.random() * Questions.length);
  FQuestion = Questions[RandomNumber];
  RQuestion = FQuestion.length;
  console.log(FQuestion);
  console.log(RQuestion);
  console.log(RandomNumber);
};

// Function AddLetters takes all array elements and places them in Buttons on the DOM
//allowing you to make it function buttons does it by creating seperate buttons for
//each of the Letters and then places it into the DIV that is created in HTML
var AddLetters = function () {
  let ButtonContainer = document.getElementById("Buttons");

  for (let i = 0; i < Letters.length; i++) {
    var button = document.createElement("button");
    button.textContent = Letters[i];
    var id = "id" + i;
    button.setAttribute("id", id);
    ButtonContainer.appendChild(button);
  }
};
// Function DisplayLetters takes the Questions array and uses the length of the Array
//and then creates a DIV for each letter in Questions array it then places a _ "Underscore"
//in each DIV created
var DisplayLetters = function () {
  for (let j = 0; j < RQuestion; j++) {
    let mdiv = document.getElementById("Letters");
    let cdiv = document.createElement("div");
    var place = "PlaceHolder" + j;
    cdiv.setAttribute("id", place);
    cdiv.textContent = "_";
    mdiv.appendChild(cdiv);
  }
};
//Function ReplaceLetters gets the Button element by using getElementbyId it then
//adds an eventlistner to each of those buttons and then it checks if the Questions Letter
//matches the letter that is clicked on
var ReplaceLetters = function () {
  for (let i = 0; i < Letters.length; i++) {
    let button = document.getElementById("id" + i);
    let letter = button.textContent.toUpperCase();

    button.addEventListener("click", function () {
      for (let j = 0; j < RQuestion; j++) {
        if (Questions[RandomNumber][j] === letter) {
          let letterdiv = document.getElementById("PlaceHolder" + j);
          letterdiv.textContent = letter;
        }
      }
    });
  }
};

var Hint = function () {
  let Shint = document.getElementById("Desciption");
  let Hint = document.getElementById("Hint");

  Hint.addEventListener("click", function () {
    var Hints = Descriptions[RandomNumber];
    Shint.textContent = Hints;
    Hint.style.backgroundColor = "transparent";
  });
};

var HangmanHide = function () {
  var Base = document.querySelector(".Base");
  Base.style.visibility = "hidden";
};

var HangmanShow = function () {
  var Base = document.querySelector(".Base");
  var Lpill = document.getElementById("Lpill");
  var Spill = document.getElementById("Spill");
  var Rope = document.getElementById("Rope");
  var Head = document.getElementById("Head");
  var Neck = document.getElementById("Neck");
  var Larm = document.getElementById("Larm");
  var Rarm = document.getElementById("Rarm");
  var Lleg = document.getElementById("Lleg");
  var Rleg = document.getElementById("Rleg");
  var ButtonsDiv = document.getElementById("Buttons");
  let Shint = document.getElementById("Desciption");
  var PAG = document.getElementById("Restart");
  var Lives = document.getElementById("Lives");

  var Incorrect = 0;
  for (let p = 0; p < Letters.length; p++) {
    let but = document.getElementById("id" + p);
    let lete = but.textContent.toUpperCase();
    but.addEventListener("click", function () {
      but.style.visibility = "hidden";
      var Found = false;
      for (let l = 0; l < RQuestion; l++) {
        if (Questions[RandomNumber][l] === lete) {
          Found = true;
          Wins++;
        }
      }
      if (Found === false) {
        Incorrect++;
        Live--;
      }
      if (Incorrect === 1) {
        Base.style.visibility = "visible";
        Lpill.style.visibility = "visible";

        Lives.textContent = "You have " + Live + " Lives Remaining";
      }
      if (Incorrect === 2) {
        Spill.style.visibility = "visible";
        Rope.style.visibility = "visible";

        Lives.textContent = "You have " + Live + " Lives Remaining";
      }
      if (Incorrect === 3) {
        Head.style.visibility = "visible";
        Neck.style.visibility = "visible";

        Lives.textContent = "You have " + Live + " Lives Remaining";
      }
      if (Incorrect === 4) {
        Larm.style.visibility = "visible";
        Rarm.style.visibility = "visible";

        Lives.textContent = "You have " + Live + " Lives Remaining";
      }
      if (Incorrect === 5) {
        Lleg.style.visibility = "visible";
        Rleg.style.visibility = "visible";
        Rleg.style.backgroundColor = "red";
        Lleg.style.backgroundColor = "red";
        Rarm.style.backgroundColor = "red";
        Larm.style.backgroundColor = "red";
        Neck.style.backgroundColor = "red";
        Head.style.backgroundColor = "red";
        ButtonsDiv.style.visibility = "hidden";
        PAG.style.visibility = "visible";
        Shint.textContent = "Better Luck Next Time :(";
        Lives.textContent = "Game Over";
      }
    });
  }
};

var Win = function () {
  var PAG = document.getElementById("Restart");
  let Shint = document.getElementById("Desciption");
  for (let p = 0; p < Letters.length; p++) {
    let but = document.getElementById("id" + p);

    but.addEventListener("click", function () {
      if (Wins === RQuestion) {
        PAG.style.visibility = "visible";
        Shint.textContent = "Well Done, Play Again";
      }
    });
  }
};

window.onload = function () {
  RandomQuestion();
  AddLetters();
  DisplayLetters();
  ReplaceLetters();
  Hint();
  HangmanHide();
  HangmanShow();
  Win();
};
