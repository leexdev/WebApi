const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const ageInput = document.querySelector("#age");
const usernameInput = document.querySelector("#username");
const createUserForm = document.querySelector("#create-user-form");

const handleCreateUser = async (name, age, login,password) => {
  const res = await axios.post("https://localhost:7234/api/Auth/register", {
    login, password,name,age
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

    window.location.pathname = "/users.html"
};

createUserForm.addEventListener("submit", (e) => {
  e.preventDefault();

    const name = nameInput.value;
    const password = passwordInput.value;
    const age = ageInput.value;
    const username = usernameInput.value;

    handleCreateUser(name, age, username, password);
});
