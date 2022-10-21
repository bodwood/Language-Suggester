function handleSuggester(event) {
  event.preventDefault();

  const platform = document.querySelector('input[name="platform"]:checked').value;
  const perferredOS = document.getElementById("operatingSystem").value;
  const experience = parseInt(document.getElementById("experience").value);
  const logic = document.querySelector('input[name="logic"]:checked').value;
  const videoGame = document.getElementById("videoGames").value;


  const headSuggest = document.querySelector("div#headSuggest");
  const python = document.querySelector("div#python");
  const java = document.querySelector("div#java");
  const swift = document.querySelector("div#swift");
  const cPlus = document.querySelector("div#cPlus");
  const formBody = document.querySelector("div#formBody");


  python.setAttribute("class", "hidden");
  java.setAttribute("class", "hidden");
  swift.setAttribute("class", "hidden");
  cPlus.setAttribute("class", "hidden");
  formBody.setAttribute("class", "reveal");
  headSuggest.setAttribute("class", "hidden");

if(!(perferredOS === 'select')){
  if (platform === "smartPhones" && perferredOS === "windows" && logic === "tools") {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "windows" && logic === 'websites') {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "linux" && logic === "tools") {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "linux" && logic === 'websites') {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "macOS" && logic === "tools") {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "macOS" && logic === 'websites') {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "macOS" && logic === "tools") {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "macOS" && logic === 'websites') {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "windows" && logic === "tools") {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "windows" && logic === 'websites') {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "linux" && logic === "tools") {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "linux" && logic === 'websites') {
    python.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "windows" && logic === "tools") {
    cPlus.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "windows" && logic === 'websites') {
    cPlus.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "macOS" && logic === "tools") {
    python.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "macOS" && logic === 'websites') {
    cPlus.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "linux" && logic === "tools") {
    python.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  } else if (platform === "desktops" && perferredOS === "llinux" && logic === 'websites') {
    python.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
    headSuggest.removeAttribute("class", "hidden");
  }
}else{
  alert('top three questions but be answered!');
}


  resetPage();



}

function resetPage() {
  document.getElementById("suggester").reset();
}

window.addEventListener("load", function () {
  const form = document.getElementById("suggester");
  form.addEventListener("submit", handleSuggester);
});