function handleSuggester(event) {
  event.preventDefault();

  const platform = document.querySelector('input[name="platform"]:checked').value;
  const perferredOS = document.getElementById("operatingSystem").value;
  const experience = parseInt(document.getElementById("experience").value);
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


  if (platform === "smartPhones" && perferredOS === "windows" && document.getElementById('tools').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "windows" && document.getElementById('websites').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "linux" && document.getElementById('tools').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "linux" && document.getElementById('websites').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "macOS" && document.getElementById('tools').checked) {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "smartPhones" && perferredOS === "macOS" && document.getElementById('websites').checked) {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "macOS" && document.getElementById('tools').checked) {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "macOS" && document.getElementById('websites').checked) {
    swift.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "windows" && document.getElementById('tools').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
  } else if (platform === "tablets" && perferredOS === "windows" && document.getElementById('websites').checked) {
    java.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
   } else if (platform === "tablets" && perferredOS === "linux" && document.getElementById('tools').checked) {
      swift.removeAttribute("class", "hidden");
      formBody.setAttribute("class", "hidden");
   }else if (platform === "tablets" && perferredOS === "linux" && document.getElementById('websites').checked) {
    python.removeAttribute("class", "hidden");
    formBody.setAttribute("class", "hidden");
 }else if (platform === "desktops" && perferredOS === "windows" && document.getElementById('tools').checked) {
  cPlus.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else if (platform === "desktops" && perferredOS === "windows" && document.getElementById('websites').checked) {
  cPlus.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else if (platform === "desktops" && perferredOS === "macOS" && document.getElementById('tools').checked) {
  python.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else if (platform === "desktops" && perferredOS === "macOS" && document.getElementById('websites').checked) {
  cPlus.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else if (platform === "desktops" && perferredOS === "linux" && document.getElementById('tools').checked) {
  python.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else if (platform === "desktops" && perferredOS === "llinux" && document.getElementById('websites').checked) {
  python.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
}else{
  python.removeAttribute("class", "hidden");
  formBody.setAttribute("class", "hidden");
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