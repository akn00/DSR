function authenticate(){
    if(check()){window.location.assign("profile.html");}
    
}

function check(){
    let userid = document.getElementById("EmailMobileNumber").value;
let password = document.getElementById("password").value;

let record = new Array();
record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

if (record.some((data) => { return data.phoneNumber == userid })) {
    if (record.some((data) => { return data.password == password })) {
        Toastify({
            text: "This is a toast notification",
            duration: 3000, // Duration in milliseconds
            gravity: "bottom", // Position on the screen
          }).showToast();
          
        return true;
    }
    else{
        
        Toastify({
            text: "This is a toast notification",
            duration: 3000, // Duration in milliseconds
            gravity: "bottom", // Position on the screen
          }).showToast();
          
    }
}
else if (record.some((data) => { return data.email == userid })) {
    if (record.some((data) => { return data.password == password })) {
        Toastify({
            text: "This is a toast notification",
            duration: 3000, // Duration in milliseconds
            gravity: "bottom", // Position on the screen
          }).showToast();
          
        return true;
        
    }
    else{
        Toastify({
            text: "This is a toast notification",
            duration: 3000, // Duration in milliseconds
            gravity: "bottom", // Position on the screen
          }).showToast();
          
    }
}
else {
    Toastify({
        text: "This is a toast notification",
        duration: 3000, // Duration in milliseconds
        gravity: "bottom", // Position on the screen
      }).showToast();
      
}

}