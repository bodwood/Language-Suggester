function suggestor(){
  
}

function formSubmissionHandler(){
  let form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();
    //add HTML DOM function here
    //LHTP lesson 55 of 75 example 3

  }
}

//handles code to run after webpage has finished loads resources
window.onload = function(){
  formSubmissionHandler();
};