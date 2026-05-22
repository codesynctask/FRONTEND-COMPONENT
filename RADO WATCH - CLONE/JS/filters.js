const filterCont = document.querySelectorAll(".filter-cont")


filterCont.forEach((filterItem)=>{
    filterItem.addEventListener("click",()=>{
        let ulElm =  filterItem.querySelector("ul")
        
        if (ulElm.getAttribute("class") === "text-sm capitalize absolute top-[100%] w-full bg-white hidden ") {
            ulElm.setAttribute("class","text-sm capitalize absolute top-[100%] w-full bg-white")
        }else{
            ulElm.setAttribute("class","text-sm capitalize absolute top-[100%] w-full bg-white hidden ")
        }
    })
})