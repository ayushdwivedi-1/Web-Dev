function hello() {
    console.log("hello")
}

function goodbye() {
    console.log("goodbye")
}
const Hello = document.querySelector('#hello')
Hello.addEventListener('click',hello)
const Goodbye = document.querySelector('#goodbye')
Goodbye.addEventListener('click',goodbye)