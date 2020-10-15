//Smooth Transition
function smoothScroll(target, duration) {
  var target = document.querySelector(target)
  var targetPosition = target.getBoundingClientRect().top
  var startPosition = window.pageYOffset
  var distance = targetPosition - startPosition
  var startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    var timeElapsed = currentTime - startTime
    var run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d
    t--
    return -c * (t * t * t * t - 1) + b
  }

  requestAnimationFrame(animation)
}

const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {
  smoothScroll('#section2', 800)
})

//Menu
const menuIcon = document.querySelector('.menuIcon'),
  menuCont = document.querySelector('.menuCont'),
  menuItems = document.querySelectorAll('.menuCont a')
let menuflag = true

menuIcon.addEventListener('click', () => {
  if (menuflag) {
    menuCont.style.height = '100vh'
    menuCont.style.paddingTop = '20px'

    menuItems.forEach((item, index) => {
      item.style.opacity = '1'
      item.style.transition = `opacity 0.${index + 0.5 * 2}s ease-in-out .1s`
    })
    menuflag = false
  } else {
    menuCont.style.height = '0'
    menuCont.style.paddingTop = '0'

    menuItems.forEach((item, index) => {
      item.style.opacity = '0'
      item.style.transition = `opacity 0s`
    })

    menuflag = true
  }
})
