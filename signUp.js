

// function verify() {
//     let name = document.getElementById("name").value;
//     let gender, phoneNumber;
//     let male = document.getElementById("male");
//     let female = document.getElementById("female");
//     let other = document.getElementById("other");
//     if (male.checked == true) {
//         gender = document.getElementById("male").value;
//     }
//     else if (female.checked == true) {
//         gender = document.getElementById("female").value;
//     }
//     else {
//         gender = document.getElementById("other").value;
//     }
//     let day = document.getElementById("dob_day").value;
//     let month = document.getElementById("dob_month").value;
//     let year = document.getElementById("dob_year").value;
//     let dob = new Date(`${year}-${month}-${day}`);
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("confirm_password").value;

//     let Number = document.getElementById("number").value;
//     if (Number.length == 10) {
//         phoneNumber = Number
//         if(password==confirmPassword)
//         {
//             let record = new Array();
//         record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

//         if (record.some((data) => { return data.phoneNumber == phoneNumber })) {
//             alert("Phone number already exists !!!")
//         }
//         else {
//             if (record.some((data) => { return data.email == email })) {
//                 alert("Email already exists !!!")
//             }
//             else {
//                 record.push({
//                     "name": name,
//                     "gender": gender,
//                     "dob": dob,
//                     "phoneNumber": phoneNumber,
//                     "email": email,
//                     "password": password
//                 })
//                 localStorage.setItem("users", JSON.stringify(record))
//             }


//         }}
//         else{
//             alert("Password and Confirm Password should be same !!!")
//         }




//     }

//     else {
//         alert("phone number should be of 10 digits")
//     }
// }
function verify() {
    let name = document.getElementById("name").value;
    let gender, phoneNumber;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let other = document.getElementById("other");
    if (male.checked == true) {
        gender = document.getElementById("male").value;
    } else if (female.checked == true) {
        gender = document.getElementById("female").value;
    } else {
        gender = document.getElementById("other").value;
    }
    let day = document.getElementById("dob_day").value;
    let month = document.getElementById("dob_month").value;
    let year = document.getElementById("dob_year").value;
    let dob = new Date(`${year}-${month}-${day}`);
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    let Number = document.getElementById("number").value;
    if (Number.length == 10) {
        phoneNumber = Number;
        if (password === confirmPassword) {
            let record = new Array();
            record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

            if (record.some((data) => { return data.phoneNumber == phoneNumber })) {
                alert("Phone number already exists!")
            } else {
                if (record.some((data) => { return data.email == email })) {
                    alert("Email already exists!")
                } else {
                    if (validatePassword(password)) {
                        record.push({
                            "name": name,
                            "gender": gender,
                            "dob": dob,
                            "phoneNumber": phoneNumber,
                            "email": email,
                            "password": password
                        });
                        localStorage.setItem("users", JSON.stringify(record));
                    } else {
                        alert("Password should contain at least 8 characters including uppercase, lowercase, numeric, and special characters!");
                    }
                }
            }
        } else {
            alert("Password and Confirm Password should be the same!")
        }
    } else {
        alert("Phone number should be of 10 digits!")
    }
}

function validatePassword(password) {
    // Regex pattern for password validation
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return pattern.test(password);
}


