// selecting elm
const allTabs = document.querySelectorAll(".tabs")

// Initial data load
allTabs[0].classList.add("active")
document.querySelector("h2").innerText = "Content for TAB 1"

// 1. on click change the class of tabs
allTabs.forEach(function(tab) {
    tab.addEventListener("click",function(){
        allTabs.forEach(function(tempTab){
            tempTab.classList.remove("active")
        })
        changeContent(tab.innerText)
        tab.classList.add("active")
    })
})

// 2. change content on the switch of tab

function changeContent(tabName) {
    switch (tabName) {
        case "TAB 1":
            document.querySelector("h2").innerText = "Content for TAB 1"
            break;
        case "TAB 2":
            document.querySelector("h2").innerText = "Content for TAB 2"
            break;
        case "TAB 3":
            document.querySelector("h2").innerText = "Content for TAB 3"
            break;
        default:
            document.querySelector("h2").innerText = "Content for TAB 4"
            break;
    }
}
