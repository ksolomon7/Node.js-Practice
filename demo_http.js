var http= require('http')

// http.createServer(function(req,res){
//     res.write("Hello World"); //response to the client
//     res.end()// end of response
// }).listen(8080) //set to the port

//http has to be defined and the http module has to be required


//how the response should be displayed and status code

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("Hello World");
//     res.end();
// }).listen(8080)

// request from the client, the object has a property called
//url which holds the part that comes after the domain name

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    console.log("this is req", req.url)
    res.end();
}).listen(8080);