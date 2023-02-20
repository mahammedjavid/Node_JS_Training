const fs = require('fs');

// !synchronus
const file = fs.readFileSync('./data.txt','utf-8')
// console.log(file)

// !ASYNCHRONOUS file reading using call back function
fs.readFile('./data.txt', 'utf-8', (err,data)=>{
    if(err){
        // console.log(err)
    }else{
        // console.log(data)
    }
})

const fsPromise = require('fs/promises')

// fsPromise.readFile('./data.txt', 'utf8')
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// !using Async await
async function readFile(){
    try {
        const read = await fsPromise.readFile('./data.txt', 'utf-8')
        console.log(read)
        
    } catch (error) {
        console.log(error)
    }
}

// readFile()

// write File

fsPromise.writeFile('dataTwo.txt'," file is successfully written Twice" ,{ flag : "a"})
.then((data)=>console.log("Written "))
.catch((error)=>console.log(error))