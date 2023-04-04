import $ from "../core";

$.prototype.tab=function(){
    for(let i=0;i<this.length;i++){
      $(this[i]).click(()=>{
        $(this[i])
        .addCls('tab-item--active')
        .sibling()
        .removeCls('tab-item--active')
        .closest('.tab')
        .find('.tab-content')
        .removeCls('tab-content--active')
        .eq($(this[i]).index())
        .addCls('tab-content--active')
      })
     
    }
}
$('[data-tabpanel] .tab-item').tab()