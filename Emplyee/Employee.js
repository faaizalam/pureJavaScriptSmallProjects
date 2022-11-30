console.log("hello")
let objs={}
let Alldata=[]

const data=(async()=>{
  let {data}=await axios.get("../Emplyee/data.json")
   Alldata=data
let funrender=(()=>{
  if (Alldata) {
      console.log(Alldata)
   const employelist=document.querySelector(".employenamelist")
        const sigleperson=document.querySelector(".single")
       Alldata.forEach(element => {
          const span=document.createElement("span")
          span.classList.add("listinside")
          span.innerHTML+=element.firstname
          span.setAttribute("id",element.id)
          employelist.append(span)
          span.addEventListener("click",(e)=>{
            
            const trbd=  document.getElementById("trbd")
            while (trbd.hasChildNodes()) {
                trbd.removeChild(trbd.firstChild);
              }
              // trbd.removeChild(trbd.children[0])
              
              const name=document.createElement("td")
              const conatct=document.createElement("td")
              const address=document.createElement("td")
              objs=element
            // trbd.append(td)
            name.innerHTML+=objs.firstname
            conatct.innerHTML+=objs.contact
            address.innerHTML+=objs.address
            trbd.append(name,conatct,address)
            console.log(objs)
          // td.innerHTML=objs.contact
          // td.innerHTML=objs.address
           })
          });
      }
  })
  funrender()
  document.querySelector(".form_submit").addEventListener("submit" ,async(e)=>{
    
       
    // e.preventdefault()
    e.preventDefault()
    const employelist=document.querySelector(".employenamelist")
    
    const firstname=document.querySelector(".name").value||""
    const contact=document.querySelector(".contact").value||""
    const address=document.querySelector(".address").value||""
    while (employelist.hasChildNodes()) {
      employelist.removeChild(employelist.firstChild);
    }
    if (firstname||contact||address) {
      Alldata.push({firstname,contact,address,id:Number(Alldata[Alldata.length-1].id)+1})

      funrender()
    }
    }
  )
const Add=document.querySelector(".Add")
  Add.addEventListener("click",()=>{
    const addmodel= document.querySelector(".model")
   addmodel.classList.add("active")
    })
const cross=document.querySelector(".cross")
  cross.addEventListener("click",()=>{

   const addmodel= document.querySelector(".model")
   addmodel.classList.remove("active")
  })


// .....Add new 
})

data()







