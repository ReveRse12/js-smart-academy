var itemInput = document.getElementById('item-input')
var priceInput = document.getElementById('price-input')
var addProductBtn = document.getElementById('add-product')
var productList = document.getElementById('product-list')
var priceList = document.getElementById('price-list')
var priceBtn = document.getElementById('price')
var products = []
var price = []
var renderAllItem = function() {
  productList.innerText = ''
  priceList.innerText = ''
  products.forEach(function(list){
    var itemLi = document.createElement('li')
    itemLi.innerText = list 
    productList.appendChild(itemLi)
  })
  price.forEach(function(list){
    var itemLi = document.createElement('li')
    itemLi.innerText = list 
    priceList.appendChild(itemLi)
  })
  itemInput.value = ''
  priceInput.value = ''
}
var handleButtonClick = function(){
  var itemValue = itemInput.value
  var priceValue = Number(priceInput.value)
  products.push(itemValue)
  price.push(priceValue)
  renderAllItem()
}
var sumBtn = function(){
  var sum = price.reduce(function(a,b){
    return a + b 
  }, 0)
  console.log(sum)
  document.getElementById("sum").innerHTML = sum+'$'
  
}
addProductBtn.addEventListener('click', handleButtonClick)
priceBtn.addEventListener('click', sumBtn)