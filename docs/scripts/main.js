// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
// myHeading = document.querySelector('h2')
// myHeading.textContent = 'Hello World!';

document.getElementById("img_title").onclick = function () {
    alert('痛っ! つつくのはやめて!');
}

let imgDroid = document.getElementById("img_droid");
imgDroid.onclick = function () {
    let imgSrc = imgDroid.getAttribute("src");
    if (imgSrc === "images/img_droid_default.png") {
        imgDroid.setAttribute('src', 'images/img_droid_jetpack.png');
    } else {
        imgDroid.setAttribute('src', 'images/img_droid_default.png');
    }
}

let buttonUser = document.getElementById("button_user");
let textUser = document.getElementById("text_user");

function setUserName() {
    let userName = prompt('あなたの名前を入力してください。');
    if (!userName || userName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', userName);
        textUser.textContent = 'Welcome to Android ' + userName + '!';
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    textUser.textContent = 'Welcome to Android ' + storedName + '!';
}

buttonUser.onclick = function () {
    setUserName();
}