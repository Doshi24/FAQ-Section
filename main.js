const containers = document.querySelectorAll('.container');

containers.forEach(container =>{
    const icon = container.querySelector('.icon');
    const answers =container.querySelector('.answer')

    container.addEventListener('click', ()=>{
        if(icon.classList.contains("active")){
            icon.classList.remove("active")
            answers.style.maxHeight = null;
        }else{
            icon.classList.add("active")
            answers.style.maxHeight = answers.scrollHeight + "px";

        }
    })
})