let addToHead = document.querySelector("head");
let csslink = document.createElement("link");
addToHead.appendChild(csslink);
csslink.setAttribute("rel", "stylesheet");
csslink.setAttribute("href", "css/style.css");
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
let bodY = document.querySelector("body");
bodY.appendChild(wrapper);
for (let i = 0; i < 4; i++) {
  let divs = document.createElement("div");
  wrapper.appendChild(divs);
  divs.classList.add("wrapperDivs");
}
