const modal_container1 = document.getElementById('modal_container1');
const btn_description_auto_open_modal = document.getElementById('btn_description_auto_open_modal');
const btn_description_close_modal = document.getElementById('btn_description_close_modal');

btn_description_auto_open_modal.addEventListener("click", openModalWin)
btn_description_close_modal.addEventListener("click", CloseModalWin)

function openModalWin(){
    modal_container1.style.display = "flex"
    document.documentElement.style.overflow = "hidden"
    document.querySelector(".modal_wrapper").style.display = "block"
    document.querySelector(".header1").style.display = 'none'
    
}
function CloseModalWin(){
    modal_container1.style.display = "none"
    document.querySelector(".header1").style.display = 'block'
    document.documentElement.style.overflow = "auto"
    document.querySelector(".modal_wrapper").style.display = "none"
}