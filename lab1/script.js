// TASK 1

const firstElement = document.getElementById("el-1");
const secondElement = document.querySelector("#el-2");

function changeColor1() {
    const bg = "#" + Math.floor(Math.random()*16777215).toString(16);
    const textColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    firstElement.style.backgroundColor = bg;
    firstElement.style.color = textColor;
}

function changeColor2() {
    const bg = "#" + Math.floor(Math.random()*16777215).toString(16);
    const textColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    secondElement.style.backgroundColor = bg;
    secondElement.style.color = textColor;
}

// TASK 2

function addPhoto() {
    const newPhoto = document.getElementById("newPhoto");
	if(!newPhoto) {
        let image = document.createElement("img");
        image.id = "newPhoto";
        image.src = "/lab1/images/london.jpg";
        image.alt = "London";
        photoContainer.append(image);
    }
    
}

function zoomIn() {
    const photo = document.getElementById("newPhoto");
    if (photo) {
        let currHeight = photo.clientHeight;
	    photo.style.height = (currHeight + 100) + "px";
    }
}

function zoomOut() {
    const photo = document.getElementById("newPhoto");
    if (photo) {
        let currHeight = photo.clientHeight;
	    photo.style.height = (currHeight - 100) + "px";
    }
}

function removePhoto() {
    const photo = document.getElementById("newPhoto");
    if (photo) {
        photo.remove();
    }
}