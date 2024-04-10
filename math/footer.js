// creating footer content
const content = document.createElement("a");
content.setAttribute("href", "./contents.html")
content.innerText = "Math - Table of content";

//appending footer content to content
const footer = document.getElementById('footer');
footer.appendChild(content);