// Method-2

const btn = document.querySelector('#b1')
Btn.onclick = function () {
    console.log('You clicked Me!')
    console.log('I hope it worked')
}

// Method-3 (BestOne)

const button = document.querySelector('h2')
button.addEventListener('click', () => {
    alert("You Clicked Me!!!")
})