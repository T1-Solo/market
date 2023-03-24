
window.addEventListener("DOMContentLoaded" ,  ()=> {
    const form = renderElement("form")
    const array = [1,2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    1,2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",]
    const handleSub = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        let result = ""
        for(let i = 0; i<array.length ; i++){
            result += array[parseInt(Math.random() * i)]
        }
        const user = {
           id: uuid.v4(),
          name:  data.get("name"),
          username: data.get("username"),
          email: data.get("email"),
          password: data.get("password")
        }
        let natija = []
        natija.push({token : result} , {user})
        window.localStorage.setItem("user_shop" , JSON.stringify(natija))
        let parses = JSON.parse(window.localStorage.getItem("user_shop"))
        if(parses.length >= 0){
        window.location.replace("file:///C:/Users/E-MAX%20PC%20Shop/Desktop/javascript/market/shop.html")
        }
    }
    console.log(natija);
    form.addEventListener("submit" , handleSub)
    
    
})