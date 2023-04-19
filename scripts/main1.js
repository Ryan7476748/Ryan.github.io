let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'NBA 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name'); 
  myHeading.textContent = 'NBA 酷毙了，' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/NBA1.png') {
      myImage.setAttribute('src', 'images/firefox-con.png');
    } else {
      myImage.setAttribute('src', 'images/NBA1.png');
    }
}

document.querySelector('p').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});