import $ from "../core";



$.prototype.setAtr=function(attribute,value){
     for(let i=0;i<this.length;i++){
        this[i].setAttribute(attribute,value)
     }
     return this
}

$.prototype.getAtr=function(attribute){
    let count=0
    let obj={};
    for(let i=0;i<this.length;i++){
       let atr=this[i].getAttribute(attribute)
       obj[count]=atr;
       count++
    }
    return obj[0]
}

$.prototype.removeAtr=function(attribute){
    for(let i=0;i<this.length;i++){
        if(this[i].hasAttribute(attribute)){
            this[i].removeAttribute(attribute)

        }
    }
    return this

}
$.prototype.toggleAtr=function(attribute,value){
    for(let i=0;i<this.length;i++){
        if(this[i].hasAttribute(attribute)){
            this[i].removeAttribute(attribute)
         
        }else{
            this[i].setAttribute(attribute,value)
        }
       
    }
    return this
   
}