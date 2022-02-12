const button = document.querySelector("button")
const tbody = document.querySelector("tbody")
const message = document.querySelector(".message")

const title = document.querySelector(".title input")
const isbn = document.querySelector(".isbn input")

const getList = ()=>{
    let array = [...JSON.parse(localStorage.getItem("bookList"))]
    array.forEach(element=>{
        createTr(element.title, element.isbn)
    })
} 

const updateList = (obj)=>{
    let array = []
    if(localStorage.length!=0)
        array = [...JSON.parse(localStorage.getItem("bookList"))]
    array.push(obj)
    updatedData = JSON.stringify(array)
    localStorage.setItem("bookList", updatedData)
}

const deleteList = (delEle)=>{
    let temp
    const isbn =delEle.previousElementSibling.innerHTML
    delEle.parentNode.remove()
    let array = [...JSON.parse(localStorage.getItem("bookList"))]
    array.forEach((element, i)=>{
        if(element.isbn==isbn){
            temp = element.title
            array.splice(i, 1)
        }
    })
    localStorage.setItem("bookList", JSON.stringify(array))
    displayMsg(`Book ${temp} Removed`, "#78d478")
}

const createTr = (title, isbn)=>{
    const tr = document.createElement("tr")
    tr.innerHTML = `<td>${title}</td>
             
                    <td>${isbn}</td>`
    const delEle = document.createElement("td")
    delEle.innerHTML = `<i class="fas fa-window-close"></i>`
    tr.appendChild(delEle)
    tbody.appendChild(tr)
    delEle.addEventListener("click", ()=>{   
        deleteList(delEle)
    })
}

const displayMsg = (msg, color)=>{
    message.style.opacity = 1
    message.style.backgroundColor = color
    message.innerHTML = msg
    setTimeout(()=>{
        message.style.opacity = 0
    }, 2000)
}

button.addEventListener("click", ()=>{
    if(title.value && isbn.value){
        createTr(title.value, isbn.value)
        updateList({title:title.value, isbn: isbn.value})
        title.value = ""
        isbn.value = ""
        displayMsg("Book Added", "#78d478")
    }else{
        displayMsg("Please Enter all the feilds", "#f51625")  
    }
})

getList()