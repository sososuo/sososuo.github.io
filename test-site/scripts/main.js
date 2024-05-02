
//点击切换图片
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test.png") {
    myImage.setAttribute("src", "images/test2.jpg");
  } else {
    myImage.setAttribute("src", "images/test.png");
  }
};

//个性化欢迎方式
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hi，" + myName;
  }
 
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hi，" + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  