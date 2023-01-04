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

    const fullName = document.getElementById("fullName")
    const variant = document.getElementById("variant")
    const phoneNumber = document.getElementById("phoneNumber")
    const faculty = document.getElementById("faculty")
    const address = document.getElementById("address")

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
        alert("Введіть корректні данні!")
    }
})
