const main = document.querySelector('.main')
const crsr = document.querySelector('.cursor')

    main.addEventListener('mousemove', (e) => {
        crsr.style.left = e.clientX + 'px'
        crsr.style.top = e.clientY + 'px'
    })
