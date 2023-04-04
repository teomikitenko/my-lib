import $ from '../core';

$.prototype.carousel=function(){
    for(let i =0;i<this.length;i++){
        let width=window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        let slides=this[i].querySelectorAll('.carousel-item');
        let slidesCover=this[i].querySelector('.carousel-slides');
        let dots=this[i].querySelectorAll('.carousel-indicators li')
        
        slidesCover.style.width= 100 * slides.length +'%'
     
        slides.forEach(slide=>{
        slide.style.width=width;
        })
        let offset=0;
        let slideIndex=0;

        $(this[i].querySelector('[ data-slide="next"]')).on('click',(e)=>{
            e.preventDefault();

            if(offset == (+width.replace(/\D/g,'')) * (slides.length-1)){
             offset=0
            }else{
              offset+=(+width.replace(/\D/g,''))
            }
            slidesCover.style.transform=`translateX(-${offset}px)`
            if(slideIndex === slides.length-1 ){
               slideIndex=0
            }else{
              slideIndex++;
            }
            dots.forEach((x)=>{
                x.classList.remove('active');
                dots[slideIndex].classList.add('active');
            })

          })

          $(this[i].querySelector('[ data-slide="prev"]')).on('click',(e)=>{
            e.preventDefault();

            if(offset == 0){
             offset=(+width.replace(/\D/g,'')) * (slides.length-1)
            }else{
              offset-=(+width.replace(/\D/g,''))
            }

            slidesCover.style.transform=`translateX(-${offset}px)`
            if(slideIndex == 0){
                slideIndex=slides.length-1
             }else{
               slideIndex--;
             }
              dots.forEach((x)=>{
                x.classList.remove('active');
                dots[slideIndex].classList.add('active');
            })
          })
           let id=this[i].getAttribute('id')
          $(`#${id} .carousel-indicators li`).click(e=>{
            let slideNumber=e.target.getAttribute('data-slide-to');
            slideIndex=slideNumber;
            offset=(+width.replace(/\D/g,''))*slideNumber;
            slidesCover.style.transform=`translateX(-${offset}px)`
            dots.forEach((x)=>{
                x.classList.remove('active');
                dots[slideIndex].classList.add('active');
            })

          })
    }

 
}

 $.prototype.generateSlider=function({obj}){
    for(let i=0;i<this.length;i++){
        $(this[i]).html(
            ` <ol class="carousel-indicators">
          </ol>
          <div class="carousel-inner">
          </div>
          <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
          </a>
          <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">&gt;</span>
          </a>
            `)

        
         let divs=[];
         let indicators=[];
         for(let j=0;j<obj.length;j++){
            let itemDiv=document.createElement('div');
            itemDiv.classList.add('carousel-item')
            let img=document.createElement('img');
            img.src=obj.images[j];
            itemDiv.append(img);
            divs.push(itemDiv);

            let li =document.createElement('li');
            if( j === 0){
                li.classList.add('active')
            }
            li.dataset.slideTo=j;
            indicators.push(li)
        }
        let div=document.createElement('div');
        div.classList.add('carousel-slides');
        div.append(...divs);
        this[i].querySelector('.carousel-indicators').append(...indicators);
        this[i].querySelector('.carousel-inner').append(div);
        
       $(this[i]).carousel()
    }
} 
$('.carousel').generateSlider(
    {obj:
        {images:
        ["https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg",
    "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1200px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg",
"https://oir.mobi/uploads/posts/2021-03/1616997349_45-p-fon-dlya-rabochego-stola-uspokaivayushchii-50.jpg"],
length:4}})

