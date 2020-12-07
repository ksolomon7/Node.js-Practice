var http= require('http')

// http.createServer(function(req,res){
//     res.write("Hello World"); //response to the client
//     res.end()// end of response
// }).listen(8080) //set to the port

//http has to be defined and the http module has to be required


//how the response should be displayed

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    res.end();
}).listen(8080)