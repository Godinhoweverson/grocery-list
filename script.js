let AddgroceryBtn = document.getElementById("AddgroceryBtn");
let Addgrocery = document.getElementById("Addgrocery");
let ulList = document.getElementById("list");



AddgroceryBtn.addEventListener('click', function(e){
   let product = Addgrocery.value.trim();
   if(product === "") return;
   productList(product)
   Addgrocery.value = '';
});

function productList(product) {
  let li = document.createElement("li");
  li.textContent = product;
  let span = document.createElement("span");
  span.className = "close";
  span.textContent = "delete";
  span.addEventListener("click", function (e) {
    const productDeleted = e.target.closest("li");
    productDeleted.remove();
  });
  li.appendChild(span);
  ulList.appendChild(li);
}

