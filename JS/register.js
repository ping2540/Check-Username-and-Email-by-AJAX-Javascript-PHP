var username_state = false;
var email_state = false;
var password_state = false;
var checkpassword_state = false;
var co = " is available.";
var inco = " is not available.";
var request = new XMLHttpRequest();

username.addEventListener("change", function () {
  const jso = { username: null };
  const username = this.value;
  if (isUsername(username)) {
    jso["username"] = username;
    checkDataServer(
      JSON.stringify(jso),
      document.getElementById("username"),
      "Username" + co,
      "Username" + inco
    );
  } else {
    username_state = false;
    setErrorFor(
      document.getElementById("username"),
      "Please enter a-z A-Z or 0-9."
    );
  }
});

email.addEventListener("change", function () {
  const jso = { email: null };
  const email = this.value;
  if (isEmail(email)) {
    jso["email"] = email;
    checkDataServer(
      JSON.stringify(jso),
      document.getElementById("email"),
      "Email" + co,
      "Email" + inco
    );
  } else {
    email_state = false;
    setErrorFor(document.getElementById("email"), "Email is incorrect format.");
  }
});

password.addEventListener("change", function () {
  const password = this.value;
  if (isPassword(password)) {
    password_state = true;
    setSuccessFor(
      document.getElementById("password"),
      "Password is available."
    );
  } else {
    password_state = false;
    setErrorFor(
      document.getElementById("password"),
      "Password is not available."
    );
  }
});

checkpassword.addEventListener("focus", function () {
  if (!password_state) {
    focusPassword();return;
  }
});

checkpassword.addEventListener("change", function () {
  const checkpassword = this.value;
  if ( isCheckPassword(document.getElementById("password").value, checkpassword) ) {
    checkpassword_state = true;
    setSuccessFor(
      document.getElementById("checkpassword"),
      "Password match Password check."
    );
  } else {
    checkpassword_state = false;
    setErrorFor(
      document.getElementById("checkpassword"),
      "Password check is not available."
    );
  }
});

btn.addEventListener("click", function (e) {
  if (!username_state || !password_state || (!email_state || !checkpassword_state)) {
    e.preventDefault();
    if (!username_state){focusUsername();return;} 
    else if(!email_state){focusEmail();return;} 
    else if(!password_state){focusPassword();return;}
    else {focusPasswordCheck();return;}
  }
  const jso = { username: null, email: null, password: null };
  jso['username'] = document.getElementById("username").value;
  jso['email'] = document.getElementById("email").value;
  jso['password'] = document.getElementById("password").value;
  checkDataServer(JSON.stringify(jso));
});


function checkDataServer(jsonString, ele = null, co = null, inco = null) {
  request.open("POST", "http://localhost/Register/index.php");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(jsonString);
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.response == "record") {
        alert("Success Register!!!");
      } else if (this.response == "have") {
        if (co.indexOf("Username") > -1) username_state = false;
        else email_state = false;
        setErrorFor(ele, inco);
      } else {
        if (co.indexOf("Username") > -1) username_state = true;
        else email_state = true;
        setSuccessFor(ele, co);
      }
    }
  };
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isUsername(username) {
  return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

function isPassword(password) {
  return /^[a-zA-Z0-9]{3,16}$/.test(password);
}

function isCheckPassword(password,checkpassword) {
  return password.trim() === checkpassword.trim();
}

function focusPassword() {
  document.getElementById("password").focus();
}

function focusPasswordCheck() {
  document.getElementById("checkpassword").focus();
}

function focusUsername() {
  document.getElementById("username").focus();
}
function focusEmail() {
  document.getElementById("email").focus();
}
