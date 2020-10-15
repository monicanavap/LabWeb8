//servidor
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

/*var server = express.createServer(handleRequest);

function handleRequest(request, response)  {
    response.end("Bienvenido: " + request.url);
}*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(PORT, function(){
	console.log("si jala port y app en el port: " + PORT);
});
//data
var reservations = [

	{
		name: "Hola",
		phoneNum : 81823694,
		email: "hola@gmail.com"
		uniqueId: "1234hola"

	}

];

//routes 
//home
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});
//view tables
app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

//view tables
app.get("/reserve", function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"));
});

//ruta desplegar datos
app.get("/api/tables", function(req, res){
	return res.json(reservations);

});




