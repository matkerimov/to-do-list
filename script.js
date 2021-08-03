const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const delAllBtn = document.querySelector(".del-all-btn")
const list = document.querySelector(".list")

addBtn.addEventListener("click", () => {
    if (textInput.value.trim()){
        list.innerHTML = list.innerHTML + `<li>
                     <input type="checkbox">
                     ${textInput.value}
                     <button class="del-btn">delete</button>
                  </li>`
        textInput.value = ""
    }
})

list.addEventListener("click", (event) =>{
if (event.target.classList[0] === "del-btn"){
    event.target.parentNode.remove()
}
})

delAllBtn.addEventListener("click", ()=>{
list.innerHTML = ""
})

textInput.addEventListener("keyup", (event) => {
    let key = event.keyCode
    if (textInput.value.trim() && key === 13) {
        const template = `<li class="list-item">
                            <input type="checkbox" class="done">
                            ${textInput.value}
                            <button class="del-btn">delete</button>
                           </li>`
        list.innerHTML += template
        textInput.value = ""
    }
})



















