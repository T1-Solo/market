window.addEventListener("DOMContentLoaded" , () => {
    const input = renderElement("input")
    // const template = renderElement("template").content
    let item2 = renderElement(".item2")
    const sign = renderElement(".sign")
    console.log(sign);
//   const renders = (arr) => {
//     for(let i = 0 ; i<arr.length ; i++){
//         let clone  = template.cloneNode(true)
//         let img = clone.querySelector("img")
//         img.src = object.bigPoster
//         let h2 = clone.querySelector("h2")
//         clone.appendChild(item2)
//     }
//    }    
//    renders(object)

   let inp = renderElement(".inp")
   const handleKey = (event) => {
    let rejex = new RegExp(event.terget.value , "gi")
    let filter = []
    filter = object.filter((item)  => item.name.match(rejex))
    renders(filter)
   }
   inp.addEventListener("keyup" , handleKey)



   
let korzina = renderElement(".korzina")
const handleClick = (event) => {
    console.log(inp.length);
    if(inp.length <= 0 ){
        window.location.replace("file:///C:/Users/E-MAX%20PC%20Shop/Desktop/javascript/market/korzina.html")
    }
}

let slider = renderElement(".slider")
let active =renderElement("#active")
let line1 = renderElement("#line1")
let line2 = renderElement("#line2")
let line3 = renderElement("#line3")
let line4 = renderElement("#line4")
let carusel = renderElement(".carusel")

line1.addEventListener("click" , function (){
    slider.style.transform = "translateX(0)"
    active.style.top = "0";
})

line2.addEventListener("click" , function (){
    slider.style.transform = "translateX(-25%)"
    active.style.top = "80px";
})

line3.addEventListener("click" , function (){
    slider.style.transform = "translateX(-50%)"
    active.style.top = "160px";
})

line4.addEventListener("click" , function (){
    slider.style.transform = "translateX(-75%)"
    active.style.top = "240px";
})

korzina.addEventListener("click" , handleClick)
})