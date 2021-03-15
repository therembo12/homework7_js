let $place_list = document.querySelectorAll('aside ul.places li'),
     $place_content = document.querySelectorAll('article')

let prev_visible = 0




    for (let i = 0;i < $place_list.length;i++){
        $place_list[i].addEventListener('click', function(){
            if ($place_content[i+1].style.display != 'block'){
            $place_content[i+1].style.display = 'block'
            $place_content[prev_visible].style.display = 'none'
            prev_visible = i+1
            }
            let      $place_list_active = document.querySelector("aside ul.places li.active")
            if ($place_list_active){
                $place_list_active.classList.remove('active')
              }
              this.classList.add('active');
        
        })
    }
let $li_list = document.querySelectorAll('li')
for (let i = 0;i < $li_list.length;i++){
    $li_list[i].style.transition = '0.8s'
    $li_list[i].addEventListener('mousemove', ()=>{
        let li_style = $li_list[i].style
        // li_style.paddingLeft = '30px'
        $li_list[i].classList.add('hovered')
    })
    $li_list[i].addEventListener('mouseleave',()=>{
        let li_style = $li_list[i].style
        li_style.paddingLeft = 'initial'
        $li_list[i].classList.remove('hovered')
    })
}




