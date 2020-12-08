//asynchronous application since it is not blocked
const questions=[
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred language?"
]

//process.stdout.write sends out information 
const ask=(i=0)=>{
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(' > ')
}

ask()

//declare a variable to hold the data for the responses
const response=[]
//listener-stdin looks for an input
process.stdin.on("data", data=>{
    response.push(data.toString().trim())
    if (response.length<questions.length){
        ask(response.length)
    } else {
        process.exit()
    }
})

process.on("exit", ()=>{
    process.stdout.write("I am done\n")
    process.stdout.write(`Hello ${response[0]} you would rather ${response[1]} or studying ${response[2]}.`)
})