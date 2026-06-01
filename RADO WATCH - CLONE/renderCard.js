const cardData =["p1","p2","p3"]

// elements
const productCont = document.querySelector("#product-cont")

cardData.forEach(function (item) {
    // create card element based on "item data"
    const cardElm = document.createElement("div")
    cardElm.setAttribute('class',"h-[450px] bg-gray-200 flex justify-center items-center")
    cardElm.innerText=item

    productCont.append(cardElm)
})

