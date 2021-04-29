
var modal = document.getElementById("myModal");


var btn = document.getElementById("modal");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let Rows = [];
const NUM_ELEMENTS_PER_PAGE = 20;

let indexContainer = document.getElementById("button-container");
let apiWrap = document.getElementById("api");


const fetchData = fetch("https://jsonplaceholder.typicode.com/todos").then(res => {
  res.json().then(data => {
    addRows(data);
    Elements(0);
    addingButtons(data.length)
  })
})


function addRows(data) {
  data.forEach(item => {
    let row = '';
    row += "<tr>";
    row += "<td>" + item.title + "</td>";
    row += "<td>" + item.completed + "</td>";
    row += "<td>" + item.id + "</td>";
    row += "</tr>"
    Rows.push(row);
  })
}


function Elements(pageIndex) {
  let startIndex = pageIndex * NUM_ELEMENTS_PER_PAGE;
  let endIndex = startIndex + NUM_ELEMENTS_PER_PAGE;
  let apiWrap = document.getElementById('api');

  apiWrap.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    apiWrap.innerHTML += Rows[i];
  }
}

function addingButtons(dataLength) {
  let numPages = Math.floor(dataLength / NUM_ELEMENTS_PER_PAGE);
  for (let i = 0; i < numPages; i++) {
    let button = document.createElement('button');
    button.innerHTML = i + 1;
    button.addEventListener("click", onClick)
    indexContainer.appendChild(button);
  }
}

function onClick(event) {
  let pageIndex = parseInt(event.target.innerHTML) - 1;
  Elements(pageIndex)
}

function openNav(){
  const nav = document.querySelector('.vertical-nav')
  nav.style.display = "inline-block"
  nav.style.width = "100%"
}

function closeNav(){
  const nav = document.querySelector('.vertical-nav')
  nav.style.display = "none"
}