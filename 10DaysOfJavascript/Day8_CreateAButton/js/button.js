let clickButton = document.createElement('button')
clickButton.id = 'btn'
let count = 0
clickButton.innerHTML = count

document.body.appendChild(clickButton)

clickButton.addEventListener('click', () => {
    clickButton.innerHTML = ++count
})
