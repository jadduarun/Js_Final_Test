let question1 = document.getElementById("q-1-ans");
let question3 = document.getElementById("q-3-ans");
let question5 = document.getElementById("q-5-ans");
let question6 = document.getElementById("q-6-ans");
let counter = document.getElementById("count");
let question7 = document.getElementById("q-7-ans");
let characterCount = document.getElementById("q-7-count");
let Registration = document.getElementById("registration");
let Login = document.getElementById("login");
let RegistrationDiv = document.getElementById("registration-div");
let LoginDiv = document.getElementById("login-div");
let Logout = document.getElementById("logout");
let regUsername = document.getElementById("reg-username");
let regPassword = document.getElementById("reg-password");
let regSubmit = document.getElementById("reg-submit");
let logUsername = document.getElementById("log-username");
let logPassword = document.getElementById("log-password");
let logSubmit = document.getElementById("log-submit");
let logSuccess = document.getElementById("login-success");
let datas = document.getElementById("datas");
let list = document.getElementById("list");
let show = document.getElementById("show");
let add = document.getElementById("add");
let addDiv = document.getElementById("add-div");
let addBtn = document.getElementById("add-btn");
let addInput = document.getElementById("add-input");
let view = document.getElementById("view");
let viewDiv = document.getElementById("view-pro");
let count = 0;
let registration = [];
let products = [];
proCount = 0;
let url = "https://restcountries.com/v3.1/all";
let productUrl = "https://fakestoreapi.com/products";
let ul = document.createElement("ul");

view.addEventListener("click", () => {
  addDiv.style.display = "none";
  show.style.display = "none";
  ul.innerText = "";
  viewDiv.innerText = "";
  let a = products.slice(proCount, products.length - 1);
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      let li = document.createElement("li");
      li.innerText = `Product Title : ${products[i]}`;
      ul.appendChild(li);
    }
    console.log(products);
    viewDiv.appendChild(ul);
  } else {
    viewDiv.innerText = "No products";
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addInput.value === "") {
    alert("Please enter Product Name");
  } else {
    products.push(addInput.value);
    let li = document.createElement("li");
    li.innerText = `Product Title : ${addInput.value}`;
    ul.appendChild(li);
    show.appendChild(ul);
    addInput.value = "";
  }
});

async function asyncProductFunction() {
  viewDiv.innerText = "";
  show.style.display = "block";
  addDiv.style.display = "block";
  ul.innerText = "";
  let a = await fetch(productUrl)
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < 5; i++) {
        if (products.length <=5) {
          products.push(response[i].title);
        }
        let title = document.createElement("li");
        title.innerText = `Product Title : ${response[i].title}`;
        ul.appendChild(title);
        show.appendChild(ul);
      }
      proCount += 5;
    });
}

list.addEventListener("click", asyncProductFunction);

async function asyncFunction() {
  let a = await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < 5; i++) {
        let image = document.createElement("img");
        image.src = response[i].flags.png;
        datas.appendChild(image);
        question1.disabled = "true";
      }
    });
}

question1.addEventListener("click", asyncFunction);

Registration.addEventListener("click", () => {
  RegistrationDiv.style.display = "block";
  LoginDiv.style.display = "none";
});

Login.addEventListener("click", () => {
  RegistrationDiv.style.display = "none";
  LoginDiv.style.display = "block";
});

Logout.addEventListener("click", () => {
  RegistrationDiv.style.display = "block";
  LoginDiv.style.display = "none";
});

regSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (regUsername.value !== "" && regPassword.value !== "") {
    registration.push({
      username: regUsername.value,
      password: regPassword.value,
    });
    regUsername.value = "";
    regPassword.value = "";
  }
});

logSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (logUsername.value !== "" && logPassword.value !== "") {
    for (let i = 0; i < registration.length; i++) {
      if (
        registration[i].username === logUsername.value &&
        registration[i].password === logPassword.value
      ) {
        logSuccess.style.display = "block";
        logSuccess.innerText = "Login Successfully";
      } else {
        logSuccess.innerText = "Please Enter Registered Username and Password";
        logSuccess.style.display = "block";
      }
    }
    logUsername.value = "";
    logPassword.value = "";
  }
});

counter.addEventListener("click", () => {
  count++;
  question6.innerText = `Count : ${count}`;
});

question7.addEventListener("input", () => {
  characterCount.innerText = `Total Characters of Box : ${question7.value.length}`;
});

window.addEventListener("mouseover", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  question5.innerText = `X : ${x} , y : ${y}`;
});

question3.addEventListener("click", () => {
  if (question3.innerText == "Click Me") {
    question3.innerText = "Clicked!";
  } else {
    question3.innerText = "Click Me";
  }
});
