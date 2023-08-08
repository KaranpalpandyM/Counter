(function(){
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0

    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            if(button.classList.contains('prevButton')){
                count--
            }
            else if(button.classList.contains('nextButton')){
                count++
            }

            const counter=document.querySelector('#out')
            counter.textContent = count
            if(count<0){
                counter.style.color = 'red'
            }
            else if(count>0){
                counter.style.color = 'green'
            }
            else{
                counter.style.color = '#333333'
            }
        })
    })
})()








/*(function(){
    const num=document.querySelector(".btn")
    let count = 0

     num.forEach(fucntion(button){
        button.addEventListener('click',function(btn){
            if(btn.classList.contains('.prevButton')){
                count--
            }
            else if(btn.classsList.contains('.nextButton')){
                count++
            }

            const counter=document.querySelector(".out")
            counter.textContent = count
            if(count<0){
                counter.style.color = 'red'
            }
            else if(count>0){
                counter.style.color = 'green'
            }
        })
     })

})*/