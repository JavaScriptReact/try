const form = document.getElementById("form");

const Username = document.getElementById("username");
const Password = document.getElementById("pass");
const button = document.getElementById("submit");

function submit() {
  const username = Username.value;
  const password = Password.value;
  const data = { username: username, password: password };

  if (username && password) return alert(JSON.stringify(data, null, 2));
  alert("Error 405 : Method Now Allowed");
}

form.onsubmit = (event) => event.preventDefault();
button.addEventListener("click", submit);
