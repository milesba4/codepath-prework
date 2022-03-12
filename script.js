// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const countDown = document.getElementById('timer')
const Mins = 1
//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];  // 2, 6, 4, 3, 5, 1, 2, 4]
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var time = Mins*90; //initial time variable to 90 seconds
let clock = setInterval(updateTimer, 1000) //creating a variable that updates the updatetimer function
let timeOut = setTimeout(stopGameTime, 92000) // creating a variable for timerunout and syncing it with timer

window.onload = function timeStay(){ //Forcing timer to stay on zero when browser is refreshed
  time = 0;
}

function updateTimer(){ // creating updateTimer function for timer
  const minutes = Math.floor(time / 60);
  let seconds = time%60;
  if(seconds<10){   // if seconds go below 10
    seconds = '0'+seconds  // add 0 before it
  }
  countDown.innerHTML = `${minutes}:${seconds}`;
  time--;
  if(time<0){    
  clearInterval((time = 0)); // preventing timer from showing negative value
  }

}
function playMyAudio(btn){  // function for playing tone
  document.getElementById("Audio"+btn).play();
}

function pauseMyAudio(btn){ // function for stopping tone
  document.getElementById("Audio"+btn).pause();
}


function generatePattern(){ // function for generating random array of 8 integers
  for(let i=0; i<8; i++){
    var min = Math.ceil(1);
    var max = Math.floor(7);
    pattern.push(Math.floor(Math.random() * (max - min) + min)); // appending the integers to the pattern array
  }
}

function startGame(){
    timeOut; // syncing stopGameTime function to timer
    //initialize game variables
    mistakes= 0  // initializing mistakes variable
    generatePattern()
    console.log(pattern) //check random pattern
    progress = 0;
    clueHoldTime=1000;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    clearInterval((clock, time = Mins*90));  // resetting timer everytime player presses start
}
function stopGame(){
    //initialize game variables
    progress = 0;
    pattern = []
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clearInterval((clock, time = 0));
    
}

function stopGameTime(){   // created a duplicate stop game function for timerunout
    stopGame();
    alert("Sorry, you've run out of time!")   // telling player they've run out of time
}
// Sound Synthesis Functions
function playTone(btn,len){ 
  playMyAudio(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    playMyAudio(btn)
    tonePlaying = true 
  }
}
function stopTone(btn){
  pauseMyAudio(btn)
  tonePlaying = false
}

//lighting up the buttons
function lightButton(btn){
  document.getElementById("butn"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("butn"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime-=30
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    console.log("clueHoldTime=", clueHoldTime) // checking clue hold time every turn
  }
}
function loseGame(){
  stopGame();
  alert("Game Over, you've lost.");
}

function winGame(){
  clearTimeout(timeOut); // stop countdown function if the user wins
  stopGame();
  alert("Congratulations, you've won!");
}
function mistakeAlert(){
  if(mistakes>1){
    alert("Oops, you've made a mistake, try again! You've made" + " " + mistakes+ " " + "mistakes");// mistake alert for more than one mistake
  }
  else{
    alert("Oops, you've made a mistake, try again!") // mistake alert for one mistake
  }
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }  
  if(pattern[guessCounter] == btn){ 
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes+=1
    mistakeAlert()
    console.log("mistakes=", mistakes) // print the number of mistakes
    if(mistakes == 3)
      loseGame();
  }
}
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
