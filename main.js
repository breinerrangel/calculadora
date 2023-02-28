
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
let display=document.getElementById("imprimir")
let operandoa=0
let operandoab=0
let operandoc=0
let valor=[]
let suma=0
let resta=0
let multi=0
let dividir=0
boton1.addEventListener("click",()=>{
    display.innerHTML+="1"
    valor.push(1) 

})
boton2.addEventListener("click",()=>{
    valor.push(2)
    display.innerHTML+="2"

})
boton3.addEventListener("click",()=>{
    valor.push(3)
    display.innerHTML+="3"

})
boton4.addEventListener("click",()=>{
    valor.push(4)
    display.innerHTML+="4"

})
boton5.addEventListener("click",()=>{
    valor.push(5)
    display.innerHTML+="5"

})
boton6.addEventListener("click",()=>{
    valor.push(6)
    display.innerHTML+="6"

})
boton7.addEventListener("click",()=>{
    valor.push(7)
    display.innerHTML+="7"

})
boton8.addEventListener("click",()=>{
    valor.push(8)
    display.innerHTML+="8"

})
boton9.addEventListener("click",()=>{
    valor.push(9)
    display.innerHTML+="9"

})
boton0.addEventListener("click",()=>{
    valor.push(0)
    display.innerHTML+="0"

})
botonc.addEventListener("click",()=>{
    
    display.innerHTML=""
    valor=[]
    suma=0
    resta=0
    multi=0
    resta=1


})
botonsumar.addEventListener("click",()=>{
   
    operadores="+"
    display.innerHTML+=operadores

})
botonresta.addEventListener("click",()=>{
    operadores="-"
    
    display.innerHTML+=operadores

})
botonmulti.addEventListener("click",()=>{
    operadores="*"
    
    display.innerHTML+=operadores

})
botondividir.addEventListener("click",()=>{
    operadores="/"
   
    display.innerHTML+=operadores

})
botonresultado.addEventListener("click",()=>{
    if(operadores=="+"){
        for(let i=0;i<valor.length;i++){
            suma+=valor[i]
        }
        display.innerHTML=suma
      
        

    } 
    else if(operadores=="-"){
        for(let i=0;i<valor.length;i++){
            resta-=valor[i]
        }
        display.innerHTML=resta
      
    }
    else if(operadores=="*"){
        for(let i=0;i<valor.length;i++){

           
        }
        display.innerHTML=multi

    }
   
    
 

})


