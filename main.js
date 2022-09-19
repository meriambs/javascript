// Image switcher code , ici avec un evenement qui est le click avec la souris on va pouvoir switcher entre deux images 

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://collection.cdn-pictorem.com/collection/900_Coolbits-Art_monkey13.jpg') {
    myImage.setAttribute ('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8IbugBe2jrSlC2jRWq2S6W5fq6TcJc5h_C-RdUz19106GFZKcZcBZxam0y66lh4uL9A&usqp=CAU');
  } else {
    myImage.setAttribute ('src','https://collection.cdn-pictorem.com/collection/900_Coolbits-Art_monkey13.jpg');
  }
}

// Personalized welcome message code , changement du nom de bienvenue grace au button change user qui se trouve en bas de la page 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName;
}
// clic sur le button pour afficher el prompt et changer le nom 
myButton.onclick = function() {
  setUserName();
}