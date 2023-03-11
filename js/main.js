const name = document.querySelector("#name");
const mapName = document.querySelector("#map-name");
const link = document.querySelector("a");
const btn = document.querySelector("button");
const User = {
    name: "",
    map_name: "",
};

btn.addEventListener("click", () => {
    if (name.value == "" || mapName.value == "") {
    } else {
        User.name = name.value;
        User.map_name = mapName.value;
        window.localStorage.setItem("userInfo", JSON.stringify(User));
        link.href = "courss.html";
    }
});