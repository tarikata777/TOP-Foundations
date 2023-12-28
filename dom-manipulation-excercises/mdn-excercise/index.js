let products;


document.getElementById("submit").onclick = function(){
    products = document.getElementById("products").value;
    appendLi(products);
}

function appendLi(item){
    let ul = document.getElementById("shopList");
    let li = document.createElement("li");
    newItem = document.createTextNode(item);

    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    
    li.append(newItem,delButton);
    ul.appendChild(li);

    delButton.onclick = () =>{document.querySelector("li").remove();}
}