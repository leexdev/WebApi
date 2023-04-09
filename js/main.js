const listProducts = document.getElementById("list-products");
const loginButton = document.getElementById("login-button");

const loadData = async (token) => {
    if (!token) {
        window.location.pathname = "/login.html"
        return;
    };

    loginButton.style.display = "none";

    const res = await axios.get("https://localhost:7234/api/Item/getAll", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    console.log(res.data)

    const data = res.data.map((item) => {
        return `<div class="col-md-3">
        <div class="card">
          <div class="img">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <p class="name">${item.name}</p>
          <p class="price">${item.price}VND</p>
        </div>
      </div>`
    })

    listProducts.innerHTML = data.join("")
}

(() => {
    const token = localStorage.getItem("token")
    loadData(token)
})()