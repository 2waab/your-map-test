const user = JSON.parse(window.localStorage.getItem("userInfo"));
const contentBox = document.querySelector(".contetn-box");

for (let i = 0; i < user.numCourss; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
        <h4>Courss #${i + 1}</h4>
        <input type="text" id="name-courss" placeholder="write courss name" />
        <input type="number" id="num-courss" placeholder="how many line in the courss?" /> 
    `;
    contentBox.appendChild(box);
}