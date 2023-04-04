import $ from "../core";

$.prototype.accordeon=function(headActive="accordion-head--active",contentActive="accordion-content--active"){
    for(let i=0;i<this.length;i++){
        $(this[i]).click(()=>{
            $(this[i]).toggleCls(headActive);
            $(this[i].nextElementSibling).toggleCls(contentActive);
            console.log(this[i].nextElementSibling)
             if(this[i].classList.contains(headActive)){
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + 40 +  'px';
                
            }else{
                this[i].nextElementSibling.style.maxHeight='0px';
              
            } 
        })
    }
}
$('.accordion-head').accordeon()