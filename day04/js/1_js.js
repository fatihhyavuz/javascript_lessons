// queryselector eslesen ilk elemani secer
const headel = document.querySelector("h1");
console.log(headel)

const aboutusel = document.querySelector("#aboutus")
console.log(aboutusel)

const spanel = document.querySelector("#aboutus span")

console.log(spanel)

const menuel = document.querySelector("ul.menu")
console.log(menuel)

const menuitemel = document.querySelector("ul.menu li:nth-child(3)")
console.log(menuitemel)

headel.innerText="hello javascript."

//queryselectorall eslesen tum elemanlari getirir

const spanels = document.querySelectorAll("aboutus>span")
console.log(spanels)



//litenin ikici elemanini alip son elemanina ekleyen 

const listitemtext = document.querySelector(".menu li:nth-child(2)").innerText
console.log(listitemtext)
document.querySelector(".menu li:last-child").innerText = listitemtext

// listedeki 4. elemanin yerine koyu bir sekilde hello yazan kod 

const listitem4el = document.querySelector(".menu li:nth-child(4)")
listitem4el.innerHTML = "<b>hello</b>"