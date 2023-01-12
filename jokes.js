// document.addEventListener("DOMContentLoaded", function () {
//   btn.addEventListener("click", swapper, false);
// });
// const btn = document.getElementById("btn1");
window.onload = function () {
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => response.json())
    .then((data) => console.log(data.attachments[0].fallback));
};
function smiley() {
  const array = [
    128540, 128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519,
    128523, 128521, 128522, 128525, 128526, 128533, 128539, 128541, 128578,129312,	129315,129322,129325,
    129299,
  ];

    str = "";
    value = array[Math.floor(Math.random() * array.length)];
    str = "&#" + value;
    console.log(str);
    document.getElementById("smiley").innerHTML = str;
  
}

// https://icanhazdadjoke.com/slack
// const answer = document.getElementById("apijokes");
// data.attachments[0].fallback
var joke = "";
document.getElementById("button").addEventListener("click", function () {
  
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.attachments[0].fallback);
      joke = data.attachments[0].fallback;
      console.log("New Joke" + joke);
        document.getElementById("apijo").innerHTML = joke;
        smiley();
    });
    
});
