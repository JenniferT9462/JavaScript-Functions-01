console.log("Hello World!");
//Add a audio clip of the refrain and attach it to a button
function audio() {
  let mySound = new Audio('youSpinMeRound.mp3');
  mySound.volume = 0.10; // Make audio volume at 10%
  mySound.play()
}
audioBtn.onclick = audio;

function youSpinMeRound() {
  //Verse 1
  let verse1 = "";
  verse1 += "If I, I get to know your name<br>";
  verse1 += "Well I could trace<br>";
  verse1 += "Your private number, baby<br><br>";
  lyrics.innerHTML += verse1;

  refrain2();

  //Verse 2
  let verse2 = "";
  verse2 += "I want some, want some<br>";
  verse2 += "I've set my sights on you<br>";
  verse2 += "(Like no one else will do)<br>";
  verse2 += "And I, I've got to have<br>";
  verse2 += "My way now, baby<br><br>";
  lyrics.innerHTML += verse2;

  refrain3();

  //Verse 3
  let verse3 = "";
  verse3 += "I, I got to be your friend now, baby<br>";
  verse3 += "And I, I-I-I-I would like to move<br>";
  verse3 += "In just a little bit closer<br><br>";
  lyrics.innerHTML += verse3;

  refrain3();

  //Verse 4
  let verse4 = "";
  verse4 += "I want your love<br>";
  verse4 += "I want your love<br><br>";
  lyrics.innerHTML += verse4;

  refrain3();
  refrain1();
  refrain1();
  lyrics.innerHTML += `<a href="https://www.lyrics.com/lyric-lf/730793/Dead+or+Alive/You+Spin+Me+Round" target="_blank">Link to Lyrics</a>`;
}
function songHandler() {
  youSpinMeRound();
}
let lyricsBtn = document.getElementById("lyricsBtn");
lyricsBtn.addEventListener('click', songHandler);

function round() {
  return "'round";

}
function refrain1() {
  let words1 = ""; 
  words1 += `You spin me right ${round()}, baby<br>`;
  words1 += `Right ${round()} like a record, baby<br>`;
  words1 += `Right ${round()}, ${round()}, 'round<br><br>`;
  lyrics.innerHTML += words1;

}
function refrain2() {
  let words2 = "";
  words2 += "All I know is that to me<br>";
  words2 += "You look like you're lots of fun<br>";
  words2 += "Open up your lovin' arms<br>";
  words2 += "Watch out, here I come<br><br>";
  lyrics.innerHTML += words2;
}
function refrain3() {
  refrain2();
  refrain1();
  refrain1();
}
