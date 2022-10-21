function handleSuggester(event){
  event.preventDefault();
  
  const platform = document.querySelector('input[name="platform"]:checked').value; 
  const perferredOS = document.getElementById("operatingSystem").value;
  const experience = parseInt(document.getElementById("experience").value);
  const website = document.getElementById("websites").value;
  const tools = document.getElementById("tools").value;
  const videoGame = document.getElementById("videoGames").value;

  const headSuggest = document.querySelector("div#headSuggest");
  const python = document.querySelector("div#python");
  const java = document.querySelector("div#java");
  const swift = document.querySelector("div#swift");
  const cPlus = document.querySelector("div#cPlus");

  python.setAttribute("class", "hidden");
  java.setAttribute("class", "hidden");


  if(platform === "smartPhones"){
    python.removeAttribute("class", "hidden");
    java.removeAttribute("class", "hidden");
  }

  let btnClear = document.getElementById("btn");
  btnClear.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    platform.value = '';
    videoGame.value = '';
  });


}

window.addEventListener("load", function() {
  const form = document.getElementById("suggester");
  form.addEventListener("submit", handleSuggester);
  form.reset();
});