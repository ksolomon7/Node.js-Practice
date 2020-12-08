var http= require('http')
var url= require('url')

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

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     console.log("this is req", req.url)
//     res.end();
// }).listen(8080);

// splitting query string
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"})
    var q=url.parse(req.url,true).query;
    //q is an object in order to pull out the values you need 
    //to do q.year
    var txt= q.year +" "+ q.month;
    res.end(txt)
}).listen(8080)