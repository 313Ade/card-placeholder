const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// setTimeout((getData) => {
    
// }, 2000);
setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="/assets/img/forest.jpg" alt="forest" />'
    title.innerHTML = 'Lorem ipsum dolor amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user"/>'
    name.innerHTML = 'Hussein Bolt'
    date.innerHTML = 'OCt 8, 2030'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}