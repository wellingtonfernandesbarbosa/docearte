document.addEventListener('DOMContentLoaded', function () {
  verification();
});

function verification() {
  const user = document.getElementById("name");
  const password = document.getElementById("password");
  
  user.addEventListener('input', (event) => {
    enableButton();
  })

  password.addEventListener('input', (event) => {
    enableButton();
  })
}


function enableButton() {
  const userContent = document.getElementById("name").value;
  const passwordContent = document.getElementById("password").value;
  const loginButton = document.getElementById("login");

  if (userContent.length > 0 && passwordContent.length > 0)  {
    loginButton.disabled = false;
    loginButton.classList.remove("disabledButton");
    console.log(loginButton)
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("disabledButton");
  }
}