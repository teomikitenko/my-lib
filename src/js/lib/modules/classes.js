import $ from "../core"


$.prototype.addCls=function(...classnames){
    for(let i=0;i<this.length;i++){
      if(this[i].classList){
         this[i].classList.add(...classnames)
      }
       else{continue}
    }
    return this
}

$.prototype.removeCls=function(...classnames){
   for(let i=0;i<this.length;i++){
      if(this[i].classList){
         this[i].classList.remove(...classnames)
      }
      else{continue}
   }
   return this
}

$.prototype.toggleCls=function(classnames){
   for(let i=0;i<this.length;i++){
      if(this[i].classList){
         this[i].classList.toggle(classnames)
      }
      else{continue}
      
   }
   return this
}