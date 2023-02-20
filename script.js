const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var outputOne = [];
var outputTwo = [];
const pwoneEl = document.getElementById("pwone");
const pwtwoEl = document.getElementById("pwtwo");

generateButton.addEventListener("click", function() {
  for (let i = 0; i < 25; i++){
    let randomPw = Math.floor(Math.random()*characters.length)
    if (i < 13) {
    outputOne.push(characters[randomPw])
    pwoneEl.textContent = outputOne.join("")
    }
    else {
      outputTwo.push(characters[randomPw])
    pwtwoEl.textContent = outputTwo.join("")
    }
  }
  outputOne = []
  outputTwo = []
}
)
