document.querySelector('button').addEventListener('click',function() {
    console.log("You clicked me !")
})

// const input = document.querySelector('input')
// input.addEventListener('keyup', function() {
//     console.log("KEYUP")
// })
// input.addEventListener('keydown', function() {
//     console.log("KEYDOWN")
// })

// const input = document.querySelector('input')
// input.addEventListener('keydown', function(e) {
//     console.log("e.key")
//     console.log("e.code")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
         case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
         case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log('IGNORED!')
    }
})