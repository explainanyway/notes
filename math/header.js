// creating header content
const content = document.createElement("a");
content.setAttribute("href", "./contents.html")
content.innerText = "Math - Table of content";

//appending header content to content
const header = document.getElementById('header');
header.appendChild(content);