let menu = document.getElementById('menu')
let nav = document.querySelector('nav')

menu.addEventListener('click', function () {
    nav.classList.toggle('efeitoMenu')
})

function fnAno() {
    let ano = document.getElementById('ano')
    let data = new Date()
    ano.innerHTML = data.getFullYear()
}
fnAno()

let btn = document.getElementById('btn')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        nav.classList.remove('efeitoMenu')
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
})


btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})