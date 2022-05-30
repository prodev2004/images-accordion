// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg

const images = document.querySelectorAll('.img')

images.forEach(img => {
    img.addEventListener('click', () => {
        remove_class(images)
        img.classList.add('show_img')
    })
})

function remove_class (images) {
    images.forEach(img => {
        img.classList.remove('show_img')
    })
}

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg