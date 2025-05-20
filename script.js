function addTODO(tasklist) {
    const AllLists = document.querySelector(".lists")

    const singleList = document.createElement("div")
    singleList.classList.add("list")
    
    singleList.addEventListener("click", function(e){
        // e.stopPropagation()
        para.classList.toggle("complete");
    })


    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent = tasklist

    // para.addEventListener("click", function(e){
    //     e.stopPropagation()
    //     para.classList.toggle("complete")
    // })

    const dlt = document.createElement("span")
    dlt.classList.add("delete-button")
    dlt.innerHTML = "+"
    
    

    dlt.addEventListener("click", function () {
        singleList.remove()
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
        inputValue.value = ""
        console.log(inputValue);
    }
}

const inputBox = document.getElementById("inputBox")
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getValue()
    }
})