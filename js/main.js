var newarr = commonWords.filter(function(element) {
  return element.length > 2
})

console.log(newarr)
var chances,
  word,
  guesses = [],
  counter

var showChances = document.getElementById("chances")

var showGuess = document.getElementById("guesses")

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

window.addEventListener("load", function() {
  var p, letter, button, holder
  holder = document.getElementById("buttonsHolder")
  for (var i = 65; i <= 90; i++) {
    if (i == 65 || i == 75 || i == 84) {
      p = document.createElement("p")
    }
    letter = String.fromCharCode(i)
    button = document.createElement("button")
    button.innerHTML = letter
    button.setAttribute("data-letter", letter)
    button.onclick = function(e) {
      setLetter(this.getAttribute("data-letter"))
    }
    p.appendChild(button)
    if (i == 74 || i == 83 || i == 90) {
      holder.appendChild(p)
    }
  }
})
function setLetter(letter) {
  var div = document.getElementById("name")
  div.innerHTML = div.innerHTML + letter
}

$(document).on("click", function(e) {
  if ((guess = "word")) {
    guess = "letter"
    return "letter"
  } else {
    return guess
  }
})

// $(document).ready(function() {
//   $(".button").on("click", function(e) {
//     e.preventDefault()
//     var val1 = String.$("letter").val()

//     $("letter").val(("letter" = val1))
//   })
// })

// $(document).ready(function() {
//   $("#guessbutton").on("click", function(e) {
//     e.preventDefault()
//     if ((a = "letter")) {
//       this.a = "guessbox"
//     } else {
//       this.a = "wrong"
//     }
//   })
// })
