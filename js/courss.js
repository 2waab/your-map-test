const user = JSON.parse(window.localStorage.getItem("userInfo"));
const name = document.querySelector("h3");
const mapName = document.querySelector("p");
const num_Courss = document.querySelector("input");
const link = document.querySelector("a");
const btn = document.querySelector("button");

name.textContent = `Hi ${user.name}`;
mapName.textContent = `${user.map_name}`;

btn.addEventListener("click", () => {
    if (num_Courss.value == "") {
    } else {
        user.numCourss = +num_Courss.value;
        window.localStorage.setItem("userInfo", JSON.stringify(user));
        link.href = "setCourss.html";
    };
});