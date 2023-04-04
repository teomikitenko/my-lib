import $ from "../core";


$.prototype.modal=function(regen=false){
  let widthPadding=window.innerWidth-document.body.clientWidth;
console.log(widthPadding)
  for(let i=0;i<this.length;i++){
    const target=$(this[i]).getAtr('data-target')

    $(this[i]).click((e)=>{
     e.preventDefault();
    $(target).fadeIn(500)
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight=widthPadding+ 'px'

    }) 
    const closeButtons=document.querySelectorAll(`${target} [data-close]`);
    console.log(closeButtons)

    closeButtons.forEach(elem => {
    $(elem).click(()=>{
      $(target).fadeOut(500)
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight='0px'

          if(regen === true){
          document.querySelector(target).remove()
        }  

    }
    )
   })  
 $(target).click((e)=>{
    if(e.target.classList.contains('modal')){
        $(target).fadeOut(500)
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight='0px'

        if(regen === true){
          document.querySelector(target).remove()
        } 
    }
 })
   
  }
  
}
 
  $.prototype.createModal=function({text,btns}){
    for(let i=0;i<this.length;i++){
      let buttons=[]
      let modal=document.createElement('div');
      modal.classList.add('modal');
      modal.setAttribute('id',this[i].getAttribute('data-target').slice(1))
       
      for(let j=0;j<btns.count;j++){
        let button=document.createElement('button');
        button.textContent=btns.settings[j][0];
        button.classList.add('btn',...btns.settings[j][1]);
         if(btns.settings[j][2]){
          button.setAttribute('data-close','true')
        } 
        if(btns.settings[j][3]&&typeof btns.settings[j][3] === 'function'){
          button.addEventListener('click',btns.settings[j][3])
        }
        buttons.push(button)
      }

      modal.innerHTML=`
          <div class="modal-dialog">
      <div class="modal-content">
         <button class="close" data-close>
            <span>&times;</span>
      </button>
      <div class="modal-header">
         <div class="modal-title">${text.title}</div>
      </div>
      </div>
      <div class="modal-body">${text.body}</div>
      <div class="modal-footer">
       </div>
     </div>`
    
    console.log(...buttons)
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal)
    $(this[i]).modal(true);
   $(this[i].getAttribute('data-target')).fadeIn(500)
  }
};



