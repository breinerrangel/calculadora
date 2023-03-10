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
let guardar=[]
let valor=0
let operadores=""
let borrar=false





 boton1.addEventListener("click",()=>{
    display.innerHTML+=1    

})
boton2.addEventListener("click",()=>{
  
    display.innerHTML+=2

})
boton3.addEventListener("click",()=>{
    
    display.innerHTML+=3

})
 boton4.addEventListener("click",()=>{
    
    display.innerHTML+=4
 })
boton5.addEventListener("click",()=>{
   
    display.innerHTML+=5

})
boton6.addEventListener("click",()=>{
 
    display.innerHTML+=6

})
boton7.addEventListener("click",()=>{
    
    display.innerHTML+=7

})
boton8.addEventListener("click",()=>{
    
    display.innerHTML+=8
 })
boton9.addEventListener("click",()=>{
   
    display.innerHTML+=9
})
boton0.addEventListener("click",()=>{
    
   display.innerHTML+=0
 })

   



botonc.addEventListener("click",()=>{
    
    display.innerHTML=""
    guardar=[]
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
        
       
        display.innerHTML=valor
        guardar=[]
        valor=0
        
        borrar=true
            

    } 
    if (borrar==true) {
      guardar.shift(0,1)
      borrar=false
      
    }
    else if(operadores=="-"){
        
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){        
            valor-=guardar[i]
        } 
        
        display.innerHTML=valor  
        guardar=[]
        valor=0
        borrar==true
      
    }
    if (borrar==true) {
      guardar.shift()
      borrar=false
      
    }
    else if(operadores=="*"){
        
        
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){       
            valor*=guardar[i]
        }
        display.innerHTML=valor
        guardar=[]
        valor=0
        
    }
    else if(operadores=="/"){
        
       
        valor=guardar[0]
        for(let i=1;i<guardar.length;i++){       
            valor/=guardar[i]
        }
        display.innerHTML=valor
        guardar=[]
        valor=0
        
    }  
 
})





addEventListener("keypress",evento=>{
    if(!isNaN(evento.key)){
        display.innerHTML+=(evento.key)
    }
    
    
})
document.addEventListener("keypress",evento=>{
    if((evento.key)=="+"){
        operadores="+"
        guardar.push(parseInt(display.innerHTML))
        display.innerHTML=""
        
        

    }
    else if((evento.key)=="-"){
        operadores="-"
        guardar.push(parseInt(display.innerHTML))
        display.innerHTML=""
    }
    else if((evento.key)=="*"){
        operadores="*"
        guardar.push(parseInt(display.innerHTML))
        display.innerHTML=""
    }
    else if((evento.key)=="/"){
        operadores="/"
        guardar.push(parseInt(display.innerHTML))
        display.innerHTML=""
    }
    else if((evento.key)=="Enter"){
        guardar.push(parseInt(display.innerHTML))
        
        if(operadores=="+"){  
          
            for(let i=0;i<guardar.length;i++){
               valor+=guardar[i]
                
    
            }
            display.innerHTML=valor
            guardar=[]
            valor=0
            
           
            
            
          
            
    
        } 
        else if(operadores=="-"){
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor-=guardar[i]
    
            }
          
            
            display.innerHTML=valor
            guardar=[]
            valor=0
          
        }
        else if(operadores=="*"){
        
            
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor*=guardar[i]
    
            }
            display.innerHTML=valor
            guardar=[]
            valor=0
            
    
            
        }
        else if(operadores=="/"){
           
           
            valor=guardar[0]
            for(let i=1;i<guardar.length;i++){
                
                valor/=guardar[i]
    
            }
            display.innerHTML=valor
            guardar=[]
            valor=0
            
        }
      
    }

    
    
})
document.addEventListener("keypress",evento=>{
    if((evento.key)=="r"){
        display.innerHTML=""
        valor=0
        guardar=[]
    }
})
