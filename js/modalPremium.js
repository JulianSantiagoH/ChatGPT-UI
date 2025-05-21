const buttonOpenModal=document.querySelector(".button-open-modal")
const modal = document.querySelector('.modal-plus-closed')
const buttonContent = document.querySelector('.modal-content')

buttonModal.addEventListener("click",function(){
    if(modal.classList.contains('modal-plus-closed')){
        modal.classList.remove('modal-plus-closed')
        modal.classList.add('modal-plus-open')
    }else{
        modal.classList.remove('modal-plus-open')
        modal.classList.add('modal-plus-closed')
    }
})

buttonContent.addEventListener('click',function(){
    modal.classList.remove('modal-plus-open')
    modal.classList.add('modal-plus-closed')
})