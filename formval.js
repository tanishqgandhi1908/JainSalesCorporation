AOS.init({ offset: 300 });
var mobile_check = 0;
var email_check = 0;

var mobile_check = 0;
var email_check = 0;
function checkMobile() {
    var m = document.getElementById("mobilenumber").value;
    if ((m.match("^[0-9]{10}$")) == m) {
        document.getElementById("notValidMobileNumber").innerHTML = "";
        mobile_check = 1;
    }
    else {
        document.getElementById("notValidMobileNumber").innerHTML = "Please enter 10 digit mobile number";
        mobile_check = 0;
    }
}



function checkEmail() {
    var e = document.getElementById("email").value;
    var patt = new RegExp("^[0-9a-zA-Z]+@+[a-zA-Z]+(.gov|.com|.in)$");
    if (patt.test(e)) {
        document.getElementById("notValidEmail").innerHTML = "";
        email_check = 1;
    }
    else {
        document.getElementById("notValidEmail").innerHTML = "Please enter valid email address";
        email_check = 0;
    }
}

function submitted() {
    alert("Thank you for your message " + document.getElementById("name").value)
}

var success = `<div class="alert alert-info alert-dismissible fade show fixed-top" role="alert">
<strong>Thanks for your submission!</strong> We have recieved your mail.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

var failure = `<div class="alert alert-danger alert-dismissible fade show fixed-top" role="alert">
<strong>Oops!</strong> There was a problem submitting your form.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    var status = document.getElementById("showalert");
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // alert("Thanks for your submission! We have recieved your mail");
        status.innerHTML = success;
        form.reset()
    }).catch(error => {
        // alert("Oops! There was a problem submitting your form")
        status.innerHTML = failure;

    });
}
form.addEventListener("submit", handleSubmit)