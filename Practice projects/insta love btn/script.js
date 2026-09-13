const con = document.querySelector('#container')
const doubleTapHeart = document.querySelector('#doubleTapHeart')
const likeBtn = document.querySelector('#likeBtn')

// heart pop animation - reusable function
function playHeartAnimation() {
    doubleTapHeart.style.opacity = '1'
    doubleTapHeart.style.transform = 'translate(-50%, -50%) scale(1.5)'

    setTimeout(() => {
        doubleTapHeart.style.opacity = '0'
        doubleTapHeart.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 500)
}

// double-tap on image
con.addEventListener('dblclick', () => {
    playHeartAnimation()

    likeBtn.classList.add('liked')
    likeBtn.classList.replace('ri-heart-3-line', 'ri-heart-3-fill')
})

// like button click
likeBtn.addEventListener('click', () => {
    const isLiked = likeBtn.classList.toggle('liked')
    likeBtn.classList.toggle('ri-heart-3-line')
    likeBtn.classList.toggle('ri-heart-3-fill')

    // sirf tab animation chalao jab like kiya ho (unlike pe nahi)
    if (isLiked) {
        playHeartAnimation()
    }
})