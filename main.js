
let boton1=document.getElementById("boton1")
let boton2=document.getElementById("boton2")
let boton3=document.getElementById("boton3")
let boton4=document.getElementById("boton4")
let boton5=document.getElementById("boton5")
let boton6=document.getElementById("boton6")
let boton7=document.getElementById("boton7")
let boton8=document.getElementById("boton8")
let boton9=document.getElementById("boton9")
let botonc=document.getElementById("botonc")
let botonresultado=document.getElementById("boton=")
let boton0=document.getElementById("boton0")
let botonsumar=document.getElementById("botonsuma")
let botonresta=document.getElementById("botonresta")
let botonmulti=document.getElementById("botonmulti")
let botondividir=document.getElementById("botondividir")
let display=document.getElementById("xd")
let operandoa=0
let operandoab=0
let operandoc=0
let guardar=[]
let valor=0
let dato2=document.getElementById("input2")




// boton1.addEventListener("click",()=>{
//     display.innerHTML+=boton1.innerHTML    

// })
// boton2.addEventListener("click",()=>{
  
//     display.innerHTML+=boton2.innerHTML

// })
// boton3.addEventListener("click",()=>{
    
//     display.innerHTML+=boton3.innerHTML

// })
// boton4.addEventListener("click",()=>{
    
//     display.innerHTML+=boton4.innerHTML

// })
// boton5.addEventListener("click",()=>{
   
//     display.innerHTML+=boton5.innerHTML

// })
// boton6.addEventListener("click",()=>{
    
//     display.innerHTML+=boton6.innerHTML

// })
// boton7.addEventListener("click",()=>{
    
//     display.innerHTML+=boton7.innerHTML

// })
// boton8.addEventListener("click",()=>{
    
//     display.innerHTML+=boton8.innerHTML

// })
// boton9.addEventListener("click",()=>{
   
//     display.innerHTML+=boton9.innerHTML
// })
// boton0.addEventListener("click",()=>{
    
//     display.innerHTML+=boton0.innerHTML

   



botonc.addEventListener("click",()=>{
    
    display.innerHTML=""
    dato2.value=""
    guardar.length=0
    valor=0
    
   
   


})
botonsumar.addEventListener("click",()=>{

    operadores="+"
    guardar.push(parseInt(dato2.value))
   
    dato2.value=""
    display.innerHTML=operadores

})
botonresta.addEventListener("click",()=>{
    operadores="-"
    guardar.push(parseInt(dato2.value))
    dato2.value=""
   
    
    display.innerHTML=operadores

})
botonmulti.addEventListener("click",()=>{
    operadores="*"
    guardar.push(parseInt(dato2.value))
  
    dato2.value=""
    
    display.innerHTML=operadores

})
botondividir.addEventListener("click",()=>{
    operadores="/"
    guardar.push(parseInt(dato2.value))
   
    dato2.value=""
   
    display.innerHTML=operadores

})
botonresultado.addEventListener("click",()=>{
    if(operadores=="+"){
        guardar.push(parseInt(dato2.value))
        dato2.value=""
        for(let i=0;i<guardar.length;i++){
            valor+=guardar[i]
            console.log(valor)

        }
        display.innerHTML=valor
        console.log(valor)
       
        
        
      
        

    } 
    else if(operadores=="-"){
        guardar.push(parseInt(dato2.value))
        dato2.value=""
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor-=guardar[i]

        }
        display.innerHTML=valor
        
      
    }
    else if(operadores=="*"){
        guardar.push(parseInt(dato2.value))
        dato2.value=""
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor*=guardar[i]

        }
        display.innerHTML=valor
        

        
    }
    else if(operadores=="/"){
        guardar.push(parseInt(dato2.value))
        dato2.value=""
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor/=guardar[i]

        }
        display.innerHTML=valor
        
    }
   
    
 

})



