import  $ from "../core";

$.prototype.dropdown=function(){
    for(let i=0;i<this.length;i++){
        const id=$(this[i]).getAtr('id');
        const menu=$(`[data-drop='${id}']`) 
         $(this[i]).on('click',()=>{
            menu.fadeToggle(300);
         })
        
    }
}
$('.drop-button').dropdown()