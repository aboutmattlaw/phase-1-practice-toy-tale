// 1) Access the list of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page 

// 2) Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM 

// 3) Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM


getToys()

const toyCollection = document.querySelector("#toy-collection")

function getToys(){
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toysArray => showImg(toysArray))
}

function showImg(foo) {
   foo.forEach(obj => {
    console.log(obj.name)
    const cardd = document.createElement("div");
    const toyName = document.createElement("h2");
    const img = document.createElement("img");
    const btn = document.createElement("button");
    cardd.className = "card";
    toyName.textContent = obj.name;
    img.src = obj.image; 
    img.className = "toy-avatar"
    btn.className = "like-btn";
    btn.id = obj.id;
    btn.textContent = obj.likes
    toyCollection.append(cardd);
    cardd.append(toyName);
    cardd.append(img);
    cardd.append(btn);
   });

}




























// function showImg(toysArray){
//     toysArray.forEach(toyObject => { 
//       let container = document.querySelecto ('#toy-collection')
//       let toydiv = document.createElement('div')
//       div.className = "card"
//       document.body.appendChild(ToyDivContainer);






// function showImg(toysArray){
//     toysArray.forEach(toyObject => { 
//       const toyDiv = document.createElement('div');
//       document.body.appendChild(ToyDivContainer);
//       const img = document.createElement('img');
//       const h2 = document.createElement('h2');
//       const p = document.createElement('p');
//       const button = document.createElement('button');
//       img.src = toyObject.image;
//       img.className = "card";
//       h2.textContent = toyObject.name;
//       p.textContent = toyObject.likes;
//       button.className = "like-btn";
//       button.id = toyObject.id;
//       toyDiv.append(img);
//       toyDiv.append(h2);
//       toyDiv.append(p);
//       toyDiv.append(button);
//     })
// }



// let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });
