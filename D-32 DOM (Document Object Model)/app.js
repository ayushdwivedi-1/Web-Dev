// // Using getElementById

// const image = document.getElementById('mountain')
// const heading = document.getElementById('mainheading')

// // Using getElementsByTagName

// const allImages = document.getElementsByTagName('img')
// for (let img of allImages) {
//     console.log(`${img.src}`)
// }

// // Using getElementsbyClassName
// const rectangleImages = document.getElementsByClassName('rectangle')
// for (let img of rectangleImages) {
//     console.log(`${img.src}`)
// for (let img of rectangleImages) {
//     img.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// }

// // Query Selector

// document.querySelector('h1')        // By Tag Name
// document.querySelector('#red')      // By ID
// document.querySelector('.big')      // By Class Name
// document.querySelectorAll('p')      // gets all p tags in the document

// // Changing Styles

// const h1 = document.querySelector('h1')
// h1.style.color = 'green'

// // classList

// const h1 = document.querySelector('h1')
// h1.classList.add('purple')
// h1.classList.add('border')
// h1.classList.remove('purple')
// h1.classList.contains('purple')      // false

// // Parent Element 

// const elem = document.querySelector('h1')
// const parentElem = elem.parentElement

// // Child Element

// const elem = document.querySelector('body')
// const childElem = elem.children[1]

// // Next and Previous Element 

// const mountain = document.querySelector('#mountain')
// const afterMountain = mountain.nextElementSibling
// const beforeMountain = mountain.previousElementSibling

// // Creating New DOM Element

// const newImage = document.createElement('img')
// newImage.src = 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// document.body.appendChild(newImage)
// newImage.classList.add('rectangle')
// const h1 = document.querySelector('h1')
// const h2 = document.createElement('h2')
// h2.append("Hello")
// document.body.append(h2)
// const newP = document.createElement('p')
// newP.append("This is a Normal Text")
// const newB = document.createElement('b')
// newB.append(' THIS IS A BOLD TEXT')
// newP.append(newB)
// document.body.prepend(newP)
// h1.insertAdjacentElement('afterend',h2)
// h2.insertAdjacentElement('beforebegin',newP)

// // Removing a DOM element

// const newSpan = document.createElement('span')
// newSpan.append("THIS TEXT IS GOING TO BE REMOVED")
// document.body.append(newSpan)
// newSpan.remove()
