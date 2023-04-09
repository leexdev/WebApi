const listProducts = document.querySelector("table")

const loadData = async (token) => {
    if (!token) {
        window.location.pathname = "/login.html"
        return;
    };


    const res = await axios.get("https://localhost:7234/api/Item/getAll", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })


    const columns = [
        `
        <tr>
				<th>ID</th>
				<th>Name</th>
				<th>Description</th>
				<th>Image</th>
				<th>Actions</th>
			</tr>
        `
    ]

    const data = res.data.map((item, index) => {
        return `<tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>
        <img src="${item.image}" alt="${item.name}">
        </td>
        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
    </tr>`
    })

    columns.push(...data);

    listProducts.innerHTML = columns.join("")
}

(() => {
    const token = localStorage.getItem("token")
    loadData(token)
})()