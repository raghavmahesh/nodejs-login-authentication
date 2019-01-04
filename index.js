var http = require('http');
var url = require('url');
//var conn = require('./connect');
var Login = require('./login');
http.createServer(function(request,response){
var q= url.parse(request.url, true);
var m= q.pathname;
if(m=='/login'){
	response.writeHead(200, {'content-type': 'text/html'});
	response.write("<form action=\"/check\" method=\"get\">");
	response.write("<input type=\"text\" name=\"username\" placeholder=\"username\">");
	response.write("<br></br>");
	response.write("<input type=\"password\" name=\"password\" placeholder=\"password\">");
	response.write("<br></br>");
	response.write("<input type=\"submit\">");
	response.write("</br></br>");
	response.write("</form>");
	response.end();
}
if(m=='/check'){
var data= q.query;
var username = data.username;
var password = data.password;
/*response.writeHead(200, {'content-type': 'text/html'});
response.write(username);
response.write("</br></br>");
response.write(password);*/
Login(username,password,response);
//conn();
//response.end();
}
}).listen(8080);
