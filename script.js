const api = "https://emojihub.yurace.pro/api/random";
const btn = document.querySelector(".button");
const h4 = document.querySelector(".h4");

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  // console.log(data.htmlCode)
  btn.innerHTML = data.htmlCode;
  h4.innerHTML = data.name;
}

btn.addEventListener("click", getData);
