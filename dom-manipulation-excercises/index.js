let newPara = document.createElement("p");
newPara.innerText = "Hey, I'm red!";
newPara.style.color = "red";

document.body.appendChild(newPara);


let heading = document.createElement("h3");
heading.innerText = "I'm a blue h3!";
heading.style.color = "blue";

document.body.appendChild(heading);

let div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

let headingOne = document.createElement("h1");
headingOne.innerText = "Im in a div!";

div.appendChild(headingOne);
document.body.appendChild(div);

