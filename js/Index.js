

import { TotalPrice } from "./Utails.js";
console.log(TotalPrice(5,100))

console.log("hh") 



function workfun(){
document.querySelectorAll(".tabcont").forEach((n) => {
    console.log(n)
    let att = document.querySelectorAll(".button").forEach((x) => {
        x.addEventListener("click", () => {
            let pos = x.getAttribute("datatabe");

            if (pos === n.getAttribute("datatabe")) {
                document.querySelectorAll(".tabcont").forEach((re) => {
                    re.classList.remove("active")
                })

                n.classList.add("active")
            }

              
      
              
            })
        
    })
})


  }
  
  


  document.addEventListener("DOMContentLoaded",()=>{
    console.log("wooo")
    workfun()
})  
   
