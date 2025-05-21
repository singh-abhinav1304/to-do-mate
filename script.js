function saveToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTODO(tasklist) {
    const AllLists = document.querySelector(".lists")

    const singleList = document.createElement("div")
    singleList.classList.add("list")

    singleList.addEventListener("click", function (e) {
        // e.stopPropagation()
        para.classList.toggle("complete");
        inputBox.value = ""
    })


    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent = tasklist

    const dlt = document.createElement("span")
    dlt.classList.add("delete-button")
    dlt.innerHTML = "+"



    dlt.addEventListener("click", function () {
        singleList.remove()
        // 👇 Remove from localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = todos.filter(item => item !== tasklist);
    saveToLocalStorage(updatedTodos);
    })


    singleList.appendChild(para)
    singleList.appendChild(dlt)
    AllLists.appendChild(singleList)

}

function getValue() {
    const inputBox = document.getElementById("inputBox")
    const inputValue = inputBox.value.trim()
    if (inputValue == "") {
        alert("blank can't be add")
    } else {
        addTODO(inputValue)
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(inputValue);
        saveToLocalStorage(todos);
        inputBox.value = ""
    }
}

const inputBox = document.getElementById("inputBox")
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getValue()
        inputBox.value = ""
    }
})

window.onload = function () {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(task => addTODO(task));
};