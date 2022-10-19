function getAndSetMadLibValues(){
  // in this section we get the value for each form input
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput= document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;

  // then we set the story variables to the values we got from the form
  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetMadLibValues();
    document.querySelector("div#story").removeAttribute("class");
  }
}


window.onload = function() {
  // inside of the window.onload handler function we only include
  // the code that we want to run when
  // the webpage has finished loading all resources
  setFormSubmissionEventHandler();
};