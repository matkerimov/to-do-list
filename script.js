const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const deleteBtn = document.querySelector(".delete-btn")
const list = document.querySelector(".list")

addBtn.addEventListener("click", ()=>{
    if (textInput.value.trim()){
        list.innerHTML = list.innerHTML `<li>
                     <input type="checkbox">
                     ${textInput.value}
                     <button>delete</button>
                  </li>`    }
})




















