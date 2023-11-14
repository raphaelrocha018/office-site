export default function initSlide() {
    const gallery = document.querySelector('.slide-wrapper')
    const wrapper = document.querySelector('.slide-gallery')
    const images = document.querySelectorAll('.slide-gallery img')
    const btnArrow = document.querySelectorAll('.slide-controls button')

    if (gallery, wrapper, images, btnArrow) {
        let imageIndex = 0
        let intervalID

        function autoSlide() {
            intervalID = setInterval(() => slideImage(++imageIndex), 5000)
        }

        autoSlide()

        function slideImage() {
            imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex
            wrapper.style.transform = `translate(-${imageIndex * 100}%)`
        }

        function updateClick(event) {
            clearInterval(intervalID)
            imageIndex += event.target.classList.value === 'right' ? 1 : -1
            slideImage(imageIndex)
        }

        wrapper.addEventListener('mouseover', () => clearInterval(intervalID))
        wrapper.addEventListener('mouseleave', autoSlide)
        btnArrow.forEach((arrow) => {
            arrow.addEventListener('click', updateClick)
        })
    }
}