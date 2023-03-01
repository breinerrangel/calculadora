
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
let guardar=[]
let valor=0
let operando=""





 boton1.addEventListener("click",()=>{
     display.innerHTML+=boton1.innerHTML    

})
boton2.addEventListener("click",()=>{
  
    display.innerHTML+=boton2.innerHTML

})
boton3.addEventListener("click",()=>{
    
    display.innerHTML+=boton3.innerHTML

})
 boton4.addEventListener("click",()=>{
    
    display.innerHTML+=boton4.innerHTML
 })
boton5.addEventListener("click",()=>{
   
    display.innerHTML+=boton5.innerHTML

})
boton6.addEventListener("click",()=>{
 
    display.innerHTML+=boton6.innerHTML

})
boton7.addEventListener("click",()=>{
    
    display.innerHTML+=boton7.innerHTML

})
boton8.addEventListener("click",()=>{
    
    display.innerHTML+=boton8.innerHTML
 })
boton9.addEventListener("click",()=>{
   
     display.innerHTML+=boton9.innerHTML
})
 boton0.addEventListener("click",()=>{
    
   display.innerHTML+=boton0.innerHTML
 })

   



botonc.addEventListener("click",()=>{
    
    display.innerHTML=""
    
    guardar.length=0
    valor=0
    
   
   


})
botonsumar.addEventListener("click",()=>{

    operadores="+"
    guardar.push(parseInt(display.innerHTML))
    display.innerHTML=""
    
    
   
   
    
    

})
botonresta.addEventListener("click",()=>{
    operadores="-"
    guardar.push(parseInt(display.innerHTML))
    display.innerHTML=""
   
   
   
    
  

})
botonmulti.addEventListener("click",()=>{
    operadores="*"
    guardar.push(parseInt(display.innerHTML))
    display.innerHTML=""
  
    
    

})
botondividir.addEventListener("click",()=>{
    operadores="/"
    guardar.push(parseInt(display.innerHTML))
    display.innerHTML=""
   
   
   

})
botonresultado.addEventListener("click",()=>{
    guardar.push(parseInt(display.innerHTML))
    if(operadores=="+"){       
        for(let i=0;i<guardar.length;i++){
           valor+=guardar[i]
            

        }
        guardar=[]
        guardar.push(valor)

       
        display.innerHTML=valor
        
       
        
        
      
        

    } 
    else if(operadores=="-"){
        guardar.push(parseInt(display.innerHTML))
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor-=guardar[i]

        }
      
        
        display.innerHTML=valor
        
      
    }
    else if(operadores=="*"){
        guardar.push(parseInt(display.innerHTML))
        
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor*=guardar[i]

        }
        display.innerHTML=valor
        

        
    }
    else if(operadores=="/"){
        guardar.push(parseInt(display.innerHTML))
       
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){
            
            valor/=guardar[i]

        }
        display.innerHTML=valor
        
    }
   
    
 

})

// function sumar(){
//     icono=event.keyCode;
//     if(icono==107){
        
//         guardar.push(parseInt(display.innerHTML))
//         display.innerHTML=""
        
    

//     }

// }
// window.onkeydown=sumar

    

 
    
    



// function restar(){
//     icono2=event.keyCode
//     if(icono2==109){
       
//         guardar.push(parseInt(display.innerHTML))
//         display.innerHTML=""
        
    

//     }
// }




function resultado(){
    respuesta=event.keyCode
    if(respuesta==13){
        if(operando=="+"){       
            for(let i=0;i<guardar.length;i++){
               valor+=guardar[i]
                
    
            }
            guardar=[]
           
            guardar.push(valor)
    
           
            display.innerHTML=valor
            
           
            
            
          
            
    
        } 
        else if(window==restar()){
            guardar.push(parseInt(display.innerHTML))
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor-=guardar[i]
    
            }
          
            
            display.innerHTML=valor
            
          
        }
        else if(operadores=="*"){
            guardar.push(parseInt(display.innerHTML))
            
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor*=guardar[i]
    
            }
            display.innerHTML=valor
            
    
            
        }
        else if(operadores=="/"){
            guardar.push(parseInt(display.innerHTML))
           
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor/=guardar[i]
    
            }
            display.innerHTML=valor
            
        }

    }
}

addEventListener("keypress",evento=>{
    if(!isNaN(evento.key)){
        display.innerHTML+=(evento.key)
    }
    else{
        operando=evento.key
    }
})
addEventListener("keypress",evento=>{
    if(isNaN(evento.key)){
        operando=evento.key

    }
    
})



