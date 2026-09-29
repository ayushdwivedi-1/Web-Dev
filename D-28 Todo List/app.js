let input = prompt("What would you like to do?")
const todos = []
while (input!=='quit' && input !=='q') {
    if (input === 'list') {
        console.log("*******************")
        for (let i = 0; i<todos.length;i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("*******************")
    }
        else if (input === 'new') {
            const newtodo = prompt("OK, What is the new todo?")
            todos.push(newtodo)
            console.log(`${newtodo}: added to the list`)
        }
        else if (input === 'delete'){
            const inputStr = prompt("Enter an index to delete!")
            index = parseInt(indexStr)
            if (!Number.isNaN(index)) {
                const deleted = todos.splice(index,1)
                console.log(`OK, deleted ${deleted[0]}`)
            }
            else {
                console.log("Unknown Index")
            }
            
        }
    input = prompt("What would you like to do?")
}
console.log("OK QUIT THE APP")