$('.carousel').generateSlider({obj:{
    images:[
        'https://2023god.com/wp-content/uploads/2021/05/novinki-avto-2022-2023-goda-16-2.jpg',
        'https://2023god.com/wp-content/uploads/2021/05/novinki-avto-2022-2023-goda-2-1.jpg',
        "https://novyna.biz.ua/wp-content/uploads/2022/05/novyj-bmw-xm-2023-avto-novosti-4f34d15.jpg",
        'https://auto.bigmir.net/i/71/39/34/9/7139349/gallery/f85970b6f6a09364954b39abe05f5c55-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg'
    ],length:4}})

      $('[data-open="modal"]').click(()=>{
        $('[data-open="modal"]').createModal({
            text:{
                title:"Нові моделі",
                body:'Нова модель BMW'
            }
            ,btns:{
                count:3,
              settings:[[
                "Закрити",
                [ 'btn-danger','btn','mr-10'],
                true
              ],[
                "Прочитати характеристики",
               
                ['btn','btn-primary',"mr-10"],
                false,
              ],[
                "Замовити",
                
                ['btn','btn-warning'],false]
            ]}}
        )
    })  
    $('[data-open="modal1"]').click(()=>{
      $('[data-open="modal1"]').createModal({
          text:{
              title:"Нові моделі",
              body:'Нова модель Volvo'
          }
          ,btns:{
              count:3,
            settings:[[
              "Закрити",
              [ 'btn-danger','btn','mr-10'],
              true
            ],[
              "Прочитати характеристики",
             
              ['btn','btn-primary',"mr-10"],
              false,
            ],[
              "Замовити",
              
              ['btn','btn-warning'],false]
          ]}}
      )
  })  
  $('[data-open="modal2"]').click(()=>{
    $('[data-open="modal2"]').createModal({
        text:{
            title:"Нові моделі",
            body:'Нова модель'
        ,btns:{
            count:3,
          settings:[[
            "Закрити",
            [ 'btn-danger','btn','mr-10'],
            true
          ],[
            "Прочитати характеристики",
           
            ['btn','btn-primary',"mr-10"],
            false,
          ],[
            "Замовити",
            
            ['btn','btn-warning'],false]
        ]}}
      })
})  
$('.send-form-btn').click(()=>{
  $().get('https://jsonplaceholder.typicode.com/users')
        .then(res=>console.log(res));

  alert("ваші дані відправлені")
})