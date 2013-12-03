var express = require("express"),
app         = express(),
http        = require("http"),
server      = http.createServer(app),
mongoose    = require("mongoose");

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

});


app.get("/", function(req, res) {
    res.send("hellow world!");

});

mongoose.connect("mongodb://localhost/lanzamientosvideojuego", function(err, res) {

if (err) {
console.log("ERROR:No se puede conectar a la base de datos, " + err);
} else {
  console.log("Conectado a la base de datos");

}

});

server.listen(3000, function() {
  console.log("servidor node corriendo sobre http://localhost:3000");
});


routes= require("./routes")(app);
