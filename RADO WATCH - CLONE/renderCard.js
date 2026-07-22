const cardData = [
  {
    name: "Classic Leather Watch",
    desc: "Premium leather strap watch with elegant design.",
    price: "10",
    productSrc: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
  },
  {
    name: "Digital Sports Watch",
    desc: "Water-resistant digital watch for sports activities.",
    price: 1499,
    productSrc: "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
  },
  {
    name: "Luxury Gold Watch",
    desc: "Stylish gold-plated luxury wrist watch.",
    price: 4599,
    productSrc: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2"
  },
  {
    name: "Minimal Black Watch",
    desc: "Simple and modern black dial wrist watch.",
    price: 2199,
    productSrc: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
  },
  {
    name: "Smart Fitness Watch",
    desc: "Track fitness and notifications with smart features.",
    price: 3299,
  },
  {
    name: "Silver Metal Watch",
    desc: "Elegant silver stainless steel watch for formal wear.",
    price: 2799,
    productSrc: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
  },
  {
    name: "Casual Everyday Watch",
    desc: "Comfortable and lightweight watch for daily use.",
    price: 999,
    productSrc: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
  },
  {
    name: "Blue Dial Watch",
    desc: "Trendy blue dial watch with premium finish.",
    price: 2499,
    productSrc: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
  },
  {
    name: "Chronograph Watch",
    desc: "Multi-functional chronograph watch with stopwatch.",
    price: 3999,
    productSrc: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
  },
  {
    name: "Vintage Brown Watch",
    desc: "Vintage-style brown leather watch with classic look.",
    price: 1899,
    productSrc: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6"
  },
  {
    name: "Vintage Brown Watch",
    desc: "Vintage-style brown leather watch with classic look.",
    price: 1899,
    productSrc: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6"
  },
  {
    name: "xyz Brown Watch",
    desc: "Vintage-style brown leather watch with classic look.",
    price: 1899,
    productSrc: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6"
  },
];

// elements
const productCont = document.querySelector("#product-cont")
const itemCount = document.querySelector("#item-count")

let cardHTML = "" //dynamic HHTML

cardData.forEach(function (item) {
   cardHTML+=`<div class="h-[500px] bg-gray-200 flex justify-start flex-col items-start p-10">
            <img class="h-[50%] w-full bg-contain object-cover bg-center" src="${item.productSrc || "https://www.rado.com/media/catalog/product/c/a/captaincook_r32223313_sld_web.png?im=Resize=(0,0),aspect=fit;Crop=(0,0,0,0),gravity=Center,allowExpansion"}" alt="">
            <h1 class="text-[2vw]  font-bold">${item.name}</h1>
            <p>${item.desc || "dummy desc"}</p>
            <h2 class="text-2xl mt-6 flex justify-center items-center"><div class="text-2xl">${item.price}</div>₹</h2>
        </div>`
})

productCont.innerHTML = cardHTML
console.log(cardHTML)


itemCount.innerHTML=cardData.length