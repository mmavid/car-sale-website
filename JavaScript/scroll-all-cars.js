const scroll_all_cars = document.querySelector('.scroll-all-cars')
const prev_scroll = document.querySelector('.prev-scroll-buttons-for-cars')
const next_scroll = document.querySelector('.next-scroll-buttons-for-cars')

prev_scroll.addEventListener('click', () =>{
    scroll_all_cars.scrollBy({
        left: -130,
    })
})

next_scroll.addEventListener('click', () =>{
    scroll_all_cars.scrollBy({
        left: 130,
    })
})