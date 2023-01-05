// TASK 1
let myCustomForm = document.getElementById("myCustomForm");

function validate(field, reg) {
    let flag;
    if(!field.value.match(reg)){
        field.style.border = "1px solid red";
        flag = false;
    }
    else{
        field.style.border = "2px solid green";
        flag = true;
    }
    return flag;
}

myCustomForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullNamePattern = /^[А-ЯІЇЄа-яіїє]+ [А-ЯІЇЄа-яіїє]+ [А-ЯІЇЄа-яіїє]+$/;
    const variantPattern = /^\d{1,2}$/;
    const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})/;
    const facultyPattern = /^[А-ЯІЇЄ]{1,4}$/;
    const addressPattern = /^[А-ЯІЇЄа-яіїє]+([ А-ЯІЇЄа-яіїє]+)?(\\,)? \d{1,4}([а-яіїє])?$/;

    const fullName = document.getElementById("fullName");
    const variant = document.getElementById("variant");
    const phoneNumber = document.getElementById("phoneNumber");
    const faculty = document.getElementById("faculty");
    const address = document.getElementById("address");

    let userFullName = document.getElementById("user-fullName");
    let userVariant = document.getElementById("user-variant");
    let userPhoneNumber = document.getElementById("user-phoneNumber");
    let userFaculty = document.getElementById("user-faculty");
    let userAddress = document.getElementById("user-address");

    let fullNameRes = validate(fullName, fullNamePattern);
    let variantRes = validate(variant, variantPattern);
    let phoneNumberRes = validate(phoneNumber, phoneNumberPattern);
    let facultyRes = validate(faculty, facultyPattern);
    let addressRes = validate(address, addressPattern);

    if (fullNameRes && variantRes && phoneNumberRes && facultyRes && addressRes) {
        userFullName.innerHTML = fullName.value;
        userVariant.innerHTML = variant.value;
        userPhoneNumber.innerHTML = phoneNumber.value;
        userFaculty.innerHTML = faculty.value;
        userAddress.innerHTML = address.value;
    } else {
        alert("Введіть корректні данні!");
    }
})

// TASK 2

let task2 = document.querySelector(".task2");
let colorPicker = document.getElementById("colorPicker");

createTable();

let myCell = document.getElementById("7");
myCell.addEventListener("mouseover", changeColor);
myCell.addEventListener("click", changeColorSelected);
myCell.addEventListener("dblclick", changeRowsColor);

function createTable() {
    let table = document.createElement("table");
    table.classList.add("myCustomTable");

    for(let i = 0; i < 6; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let td = document.createElement("td");
            let number = j + 1 + i * 6;
            td.innerHTML = number + "";
            td.id = number + "";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    task2.appendChild(table);
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

function changeColor() {
    myCell.style.backgroundColor = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
}

function changeColorSelected() {
    myCell.style.backgroundColor = colorPicker.value;
}

function changeRowsColor() {
    for (let i = 1; i < 6;) {
        for (let j = 0; j < 6; j++) {
            let id = j + 1 + i * 6;
            let cell = document.getElementById(id + "");
            cell.style.backgroundColor = colorPicker.value;
        }
        i += 2;
    }
}