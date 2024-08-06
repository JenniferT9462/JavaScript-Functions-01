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
  let lyrics = "";
  lyrics += "If I, I get to know your name\n";
  lyrics += "Well I could trace\n";
  lyrics += "Your private number, baby\n\n";
  
  lyrics += refrain2();

  //Verse 2
  lyrics += "I want some, want some\n";
  lyrics += "I've set my sights on you\n";
  lyrics += "(Like no one else will do)\n";
  lyrics += "And I, I've got to have\n";
  lyrics += "My way now, baby\n\n";
  

  lyrics += refrain3();

  //Verse 3
  lyrics += "I, I got to be your friend now, baby\n";
  lyrics += "And I, I-I-I-I would like to move\n";
  lyrics += "In just a little bit closer\n\n";
  

  lyrics += refrain3();

  //Verse 4
  lyrics += "I want your love\n";
  lyrics += "I want your love\n\n";
  

  lyrics += refrain3();
  lyrics += refrain1();
  lyrics += refrain1();
  return lyrics;
}
let song = document.getElementById("youSpinMeRound");
function songHandler() {
  let songLyrics;
  songLyrics = youSpinMeRound();
  song.innerHTML = songLyrics;
  song.innerHTML += `<a href="https://www.lyrics.com/lyric-lf/730793/Dead+or+Alive/You+Spin+Me+Round" target="_blank">Link to Lyrics</a>`;
}
let lyricsBtn = document.getElementById("lyricsBtn");
lyricsBtn.addEventListener('click', songHandler);

function round() {
  return "'round";

}
function refrain1() {
  let words1 = ""; 
  words1 += `You spin me right ${round()}, baby\n`;
  words1 += `Right ${round()} like a record, baby\n`;
  words1 += `Right ${round()}, ${round()}, 'round\n\n`;
  return words1;

}
function refrain2() {
  let words2 = "";
  words2 += "All I know is that to me\n";
  words2 += "You look like you're lots of fun\n";
  words2 += "Open up your lovin' arms\n";
  words2 += "Watch out, here I come\n\n";
  return words2;
}
function refrain3() {
  let refrain3 = "";
  refrain3 += refrain2();
  refrain3 += refrain1();
  refrain3 += refrain1();
  return refrain3;
}
