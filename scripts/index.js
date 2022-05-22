const btnEl1 = document.getElementById("btn-el-1")
const btnEl2 = document.getElementById("btn-el-2")
const btnEl3 = document.getElementById("btn-el-3")
const taskEl = document.getElementById("task-el")
const totalEl = document.getElementById("total-el")
const totalPriceEl = document.getElementById("total-price-el")
const submitEl = document.getElementById("submit-el")

let myItems = []

const itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItems") )
if (itemsFromLocalStorage) {
    myItems = itemsFromLocalStorage
    render()
}

btnEl1.addEventListener("click", function(){
    let name = btnEl1.textContent.split(":")[0]
    let price = btnEl1.textContent.split(":")[1].replace(" $","")
    let item = {
    "id":1,
    "name":name,
    "price": parseInt(price),
    }
    if (checkMyItems(item)){
        alert("This item has already added to the basket!")
        return 0
    }else {
        myItems.push(item)
        localStorage.setItem("myItems", JSON.stringify(myItems))
    }
    render()
})

btnEl2.addEventListener("click", function(){
    let name = btnEl2.textContent.split(":")[0]
    let price = btnEl2.textContent.split(":")[1].replace(" $","")
    let item = {
    "id":2,
    "name":name,
    "price": parseInt(price),
    }
    if (checkMyItems(item)){
        alert("This item has already added to the basket!")
        return 0
    }else {
        console.log("else run")
        myItems.push(item)
        localStorage.setItem("myItems", JSON.stringify(myItems))
    }
    render()
})

btnEl3.addEventListener("click", function(){
    let name = btnEl3.textContent.split(":")[0]
    let price = btnEl3.textContent.split(":")[1].replace(" $","")
    let item = {
    "id":3,
    "name":name,
    "price": parseInt(price),
    }
    if (checkMyItems(item)){
        alert("This item has already added to the basket!")
        return 0
    }else {
        myItems.push(item)
        localStorage.setItem("myItems", JSON.stringify(myItems))
    }
    render()
})

function checkMyItems(_item) {
    for (let i = 0; i < myItems.length; i++) {
        if (myItems[i].id == _item.id) {
            return _item
        }
    }
    return false
}

function render() {
    let taskLi = ""
    let totalLi = ""
    let totalPrice = 0
    for (let i = 0; i < myItems.length; i++) {
        console.log(myItems[i])
        taskLi += `<li>${myItems[i].name}<button id="${myItems[i].id}" onclick="removeItem(this.id)">Remove</button></li>`
        totalLi += `<li>
                        <span class="total_usd">$</span
                        ><span class="total_price">${myItems[i].price}</span>
                    </li>`
        totalPrice += myItems[i].price
    }
    taskEl.innerHTML = taskLi
    totalEl.innerHTML = totalLi
    totalPriceEl.textContent = "$"+totalPrice
    
}

function removeItem(itemID){
    for (let i=0; i < myItems.length; i++){
        console.log(i)
        console.log(myItems[i])
        if (myItems[i].id == itemID){
            myItems.splice(i,1)
            localStorage.setItem("myItems", JSON.stringify(myItems))
            render()
            return true

        }
        
    }
    return false
    
}

submitEl.addEventListener('click', function(){
    localStorage.clear()
    myItems = []
    render()
})