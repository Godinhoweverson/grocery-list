let AddgroceryBtn = document.getElementById("AddgroceryBtn");
let Addgrocery = document.getElementById("Addgrocery");
let ulList = document.getElementById("list");



AddgroceryBtn.addEventListener('click', function(e){
   let product = Addgrocery.value;
   addProduct(product)
});

function addProduct(product){
    let li = document.createElement("li");
    li.textContent = product;
    ulList.appendChild(li);
}