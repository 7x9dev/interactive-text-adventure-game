const buttonOne = document.querySelector("#btnOne");
const buttonTwo = document.querySelector("#btnTwo");

const image = document.querySelector("#image");
const text = document.querySelector("#txt");

// to the past
buttonOne.addEventListener("click", goBack);
function goBack() {
   image.setAttribute("src", "images/baker.jpg");
   text.innerHTML = `221B Baker Street, London`;
   buttonOne.innerHTML = `Go to another time`;
   buttonTwo.innerHTML = `Stay in 1896`;

   buttonOne.addEventListener("click", anotherTime);
   buttonTwo.addEventListener("click", sherlockTime);
}

// story 1
function anotherTime() {
   image.setAttribute("src", "images/another-time.jpg");
   text.innerHTML = `OK, going to...`;
   buttonOne.innerHTML = `India`;
   buttonTwo.innerHTML = `Vegas`;

   buttonOne.addEventListener("click", indiaTime);
   buttonTwo.addEventListener("click", vegasTime);
}
function indiaTime() {
   image.setAttribute("src", "images/india.jpg");
   text.innerHTML = `Story over! Bollywood!`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}
function vegasTime() {
   image.setAttribute("src", "images/vegas.jpg");
   text.innerHTML = `Jackpot! Let's drink the champagne!`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}

// story 2
function sherlockTime() {
   image.setAttribute("src", "images/sherlock.jpg");
   text.innerHTML = `What's next?`;
   buttonOne.innerHTML = `Meet the Queen`;
   buttonTwo.innerHTML = `Solve a murder`;

   buttonOne.addEventListener("click", queenStory);
   buttonTwo.addEventListener("click", murderStory);
}
function queenStory() {
   image.setAttribute("src", "images/queen.jpg");
   text.innerHTML = `Long live the Queen!`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}
function murderStory() {
   image.setAttribute("src", "images/murder.jpg");
   text.innerHTML = `V is for Mystery`;
   buttonOne.innerHTML = `Catch the killer`;
   buttonTwo.innerHTML = `Go dancing`;

   buttonOne.style = "display: block";
   buttonTwo.style = "display: block";

   buttonOne.addEventListener("click", killerStory);
   buttonTwo.addEventListener("click", danceStory);
}
function killerStory() {
   image.setAttribute("src", "images/killer.jpg");
   text.innerHTML = `Aaagh! Lucky shot!`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}
function danceStory() {
   image.setAttribute("src", "images/dance.jpg");
   text.innerHTML = `That's all folks`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}

// to the future
buttonTwo.addEventListener("click", toFuture);
function toFuture() {
   image.setAttribute("src", "images/future.jpg");
   text.innerHTML = `Emission impossible`;
   buttonOne.innerHTML = `To the dark side`;
   buttonTwo.innerHTML = `Oops...`;

   buttonOne.addEventListener("click", darkSide);
   buttonTwo.addEventListener("click", glitch);
}
function glitch() {
   image.setAttribute("src", "images/oops.jpg");
   text.innerHTML = `It's a trap!`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}
function darkSide() {
   image.setAttribute("src", "images/something.jpg");
   text.innerHTML = `Something, Something, Something Dark Side`;
   buttonOne.style = "display: none";
   buttonTwo.style = "display: none";
}
