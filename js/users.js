const listUsers = document.querySelector("#user");

const loadData = async (token) => {
    if (!token) {
        window.location.pathname = "/index.html";
        return;
    }

    const res = await axios.get("https://localhost:7234/api/User/getAll", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })


    const columns = [
        `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Username</th>
          <th>Action</th>
       </tr>
        `
    ]

    const data = res.data.map((item, index) => {
        return `<tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.login}</td>
        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
    </tr>`
    })

    columns.push(...data);

    listUsers.innerHTML = columns.join("")
}

(() => {
    const token = window.localStorage.getItem("token");
    loadData(token);
})()