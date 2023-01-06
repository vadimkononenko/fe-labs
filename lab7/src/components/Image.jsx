import React from 'react';

export default function Image() {

    function addPhoto() {
        const newPhotoContainer = document.querySelector(".newPhotoContainer");
        newPhotoContainer.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA_OwQ7iTEg8eBgSgqJMp3UgFd_P63-fXMA&usqp=CAU' height='300px' width='300px' id='newPhoto' alt='London'>";
    }

    function zoomInPhoto() {
        const photo = document.getElementById("newPhoto");
        if (photo) {
            let currHeight = photo.clientHeight;
            let currWidth = photo.clientWidth;
            photo.style.height = (currHeight + 100) + "px";
            photo.style.width = (currWidth + 100) + "px";
        }
    }

    function zoomOutPhoto() {
        const photo = document.getElementById("newPhoto");
        if (photo) {
            let currHeight = photo.clientHeight;
            let currWidth = photo.clientWidth;
            photo.style.height = (currHeight - 100) + "px";
            photo.style.width = (currWidth - 100) + "px";
        }
    }

    function removePhoto() {
        const photo = document.getElementById("newPhoto");
        if (photo) {
            photo.remove();
        }
    }

    return (
        <div className={'container'}>
            <button onClick={addPhoto}>Додати</button>
            <button onClick={zoomInPhoto}>Збільшити</button>
            <button onClick={zoomOutPhoto}>Зменшити</button>
            <button onClick={removePhoto}>Видалити</button>
            <div className={'newPhotoContainer'}></div>
        </div>
    )

}