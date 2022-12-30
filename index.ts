import inquirer from "inquirer";
interface Answers{
    todo:string,
    addmore:boolean
}

let todos:string[]=[]
let AddMore:boolean=true;
while(AddMore){
    const answers: Answers=await inquirer.prompt([
        {
            type:"string",
            name:"todo",
            message:"Enter your toDo"

    },
    {
        type:"confirm",
        name:"addmore",
        message:"Enter your TODO",
        default:false

    },
])
const {todo,addmore}=answers;
AddMore=addmore;
if (todo){
    todos.push(todo)
}
else{
    console.log("Kindly write any input")
}
}
if(todos.length > 0){
    console.log("your to do list")
    todos.forEach((t)=>console.log(t))
}
else{
    console.log("No toDo in the list")
}
