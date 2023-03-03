let task1 = 'sweep the floor'
let task2 = 'get groceries'
let task3 = 'make dinner'

if(task3 === 'make dinner'){
    console.log('completed')
}else{
    console.log('incomplete')
}

let tasks = [task1, task2, task3]

for (let i = 0; i < tasks.length; i++){
    let string = tasks[i]

    if(task[i] === `make dinner`){
        string += `- complete`
    }else {
        string += `- Incomplete`
    }

console.log(string)
}