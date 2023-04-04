import $ from "../core"


$.prototype.on=function(event,f){
    for(let i=0;i<this.length;i++){
       this[i].addEventListener(event,f)
    }
    return this
}

$.prototype.off=function(event,f){
   for(let i=0;i<this.length;i++){
      this[i].removeEventListener(event,f)
   }
   return this
}

$.prototype.click=function(f){
   for(let i=0;i<this.length;i++){
      if(f){
         this[i].addEventListener('click',f)
      }else{
         this[i].click()
      }
     
   }
   return this
}