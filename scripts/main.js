let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myimage.png') 
    {
      myImage.setAttribute('src', 'images/xinhai.png');
    }
    else 
    {
      myImage.setAttribute('src', 'images/myimage.png');
    }
}


let iceCream = 'chocolate';
if (iceCream === 'chocolate') 
{
  alert('我最喜欢巧克力冰激淋了。');
} 
else 
{
  alert('但是巧克力才是我的最爱呀……');
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) 
  {
    setUserName();
  } 
  else 
  {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  
  myButton.onclick = function() 
  {
    setUserName();
  }
/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/
