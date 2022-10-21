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
  const formBody = document.querySelector("div#formBody");

  python.setAttribute("class", "hidden");
  java.setAttribute("class", "hidden");
  formBody.setAttribute("class", "reveal");



  if(platform === "smartPhones" && perferredOS === "windows"){
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else{

  }
   
  resetPage();
  


}

function resetPage(){
  document.getElementById("suggester").reset();
}

window.addEventListener("load", function() {
  const form = document.getElementById("suggester");
  form.addEventListener("submit", handleSuggester);
});