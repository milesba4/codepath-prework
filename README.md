# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Miles Baffour**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/tangible-outgoing-seahorse)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The game buttons have Organ (instrument) sounds when pressed
- [x] The user gets an alert everytime they guess incorrectly (maximum of 3 strikes)
- [x] The start button highlights when user hovers over it
- [x] User can see the amount of time they have left to win the game & timer resets when user presses stop button.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

### Timer functions properly
![](http://g.recordit.co/TwweAFjlU4.gif)
### User gets 3 strikes
![](http://g.recordit.co/3J8p45esME.gif)
### Random pattern generated every new game, User gets next clue after correct guess, Playback speeds up on each turn
![](http://g.recordit.co/ODBEaq1Rmf.gif)
### Guess all of the game buttons correctly and win the game!
![](http://g.recordit.co/lGBtrcOEFx.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- Since I am somewhat new to using Javascript, I ended up using W3 schools, stackOverflow, and developerMozilla alot. Especially for the timer.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 
- A massive challenge for me when creating this project was implementing the timer. I used the setTimeout(), setInterval, clearTimeout() and clearInterval() functions and faced a lot of issues when trying to use them. One major issue I faced was trying to reset the timer when pressing the stop button. I had found a way for the timer to start once the user presses the start button, but struggled for at least an hour figuring out how to stop and reset the time once a user presses the stop button. Developer Mozilla and StackOverflow were a massive help for me when tackling this problem. After doing some searching, I figured out that clearInterval() and clearTimeout() are interchangeable and in order to use them on a setInterval function, the setInteval function must be assigned to a variable. After finding that out, I assigned my setInterval function to the variable 'clock': ``` let clock = setInterval(updateTimer, 1000)```  and used the clearInterval on the clock variable (which stored the setInterval function): ```clearInterval((clock, time = 0));```. When I placed this in my stopGame() function, this stopped the timer when the user presses the stop button. It not only stopped the countdown but also reset it to 0:00.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- I have two questions about web developement: Is front-end design as important/valued as back-end developement? When a developer faces a challenge, what is the typical procedure for trying to overcome that challenge? (if there is one). I ask the first question because I am a little conflicted when it comes to deciding whether I should prioritize front-end features or back-end features. If given an extra hour on this project, I would most likely spend around 45 minutes trying to add an extra interactive feature or perfecting the ones that are already in the game and the then spend the rest of the time adding more front-end features. My second question is just for me to get a better picture of what it's like to be stuck on a problem while working in the industry. My approach was to use resources like Stackoverflow and W3schools, but I can't imagine that tactic would work when I will be dealing with even more complicated problems.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- If I had a few more hours to work on this project, I would've spent more time making my website look neater to the user and put more time into fixing an issue that I noticed with my timer. I've noticed that I tend to underestimate the importance of front-end design and dedicate far more time to perfecting back-end functionality. To make the game more engaging to the player, I would probably add more flashy colors to the background and add images to the game buttons when clicked. Something that I also noticed, later on, was that the timer that appears runs out one or two seconds before the alert pops up that the player has run out of time. Given more time, I would've focused more on trying to synchronize the two features. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/e1b55052646140f6b523889ed2b428c2)


## License

    Copyright Miles Baffour

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
