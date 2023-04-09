const loginNameInput = document.querySelector("#name");
const loginPasswordInput = document.querySelector("#password");
const buttonLogin = document.querySelector("#button-login");
const loginForm = document.querySelector("#form-login");

const handleLogin = async (login, password) => {
  const res = await axios.post("https://localhost:7234/api/Auth/login", {
    login, password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

    // const data = await res.json();

    const data = res.data;
    console.log({data})

    localStorage.setItem("token", data.token)

    window.location.pathname = "/index copy.html"
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = loginNameInput.value;
  const password = loginPasswordInput.value;

  console.log(name, password);

  handleLogin(name, password);
});
