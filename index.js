const toggles = document.querySelector('.bottom .toggles')
let isFlip = false

toggles.onclick = () => {
    const cardFront = document.querySelector('.card .front')
    const cardBack = document.querySelector('.card .back')

    if (isFlip === false) {
        cardFront.style.transform = 'perspective(600px) rotateY(-180deg)'
        cardBack.style.transform = 'perspective(600px) rotateY(0deg)'
        isFlip = true
    }
    else {
        cardFront.style.transform = 'perspective(600px) rotateY(0deg)'
        cardBack.style.transform = 'perspective(600px) rotateY(180deg)'
        isFlip = false
    }
}

const toggles2 = document.querySelector('.back-content button')
let isFire = false

toggles2.onclick = () => {
    const gif = document.querySelector('.gif')
    if (isFire === false) {
        gif.style.opacity = '1'
        isFire = true
    }
    else {
        gif.style.opacity = '0'
        isFire = false
    }
}