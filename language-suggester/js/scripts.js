function handleSuggester(event){
  event.preventDefault();
  

}

window.addEventListener("load", function() {
  const form = document.getElementById("suggester");
  form.addEventListener("submit", handleSuggester)
});