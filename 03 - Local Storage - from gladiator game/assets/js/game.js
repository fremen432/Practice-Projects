/* GAME FUNCTIONS */
var btnStart = document.querySelector('#start');
var btnLog = document.querySelector('#log');

  // function to set name
  var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
      name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);

    localStorage.setItem("playerName", name);
  };

var logPlayerName = function () {

  alert("your name is "+ localStorage.getItem("playerName"));
  console.log(localStorage.getItem("playerName"));
};

btnStart.addEventListener('click', getPlayerName);
btnLog.addEventListener('click', logPlayerName);