// var http =require('http')
// http.createServer(function(req,res){
//  res.write("welcome Back Alien!!!")
//     res.end()
// }).listen(8081)
//const fs = require('fs'); // file system
//fs.writeFileSync('hello.txt','Hello from Node js'); //  function call
 

const http = require("http");
const Server = http.createserver((req,res) => {
    res.end("welcome to NodeJs");
});
    Server.listen("3000", () =>{
    console.log("Server is listening the port 3000...");
});

