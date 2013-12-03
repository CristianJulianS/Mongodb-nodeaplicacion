module.exports = function(app) {

var Video = require ("../ejemplo/lanzamientovideojuegos.js");



findAllVideo = function(req, res) {
          Video.find(function(err, lanzamientovideojuegos) {
          if(!err) {
             console.log("GET /lanzamientos")
             res.send(lanzamientosvideojuego);
             } else {
                    console.log("ERROR: " + err);
                    }
 });
};



findById = function(req, res) {
  Video.findById(req.params.id, function(err, lanzamientos) {
  if (!err) {
  console.log("GET /lanzamientos/" + req.params.id);
   res.send(lanzamientos);
  } else {
  console.log("ERROR: " + err);
  }
});
};

// Insertar un lanzamiento

 addVideo = function (req, res) {
  console.log("POST");
  console.log(req.body);


var lanzamientos = new Video({
    Titulo: req.body.Titulo,
    Fecha:  req.body.Fecha,
    Plataforma: req.body.Plataforma,
    summary: req.body.summary
});

lanzamientos.save(function(err) {
if (!err) {
   console.log("Created");
  } else {
   console.log(" ERROR: " + err);

 }
});

res.send(lanzamientos);

};

// Actualiza un video.


updateVideo = function(req, res) {
Video.findById(req.params.Id, function(err, lanzamientos) {

lanzamientos.Titulos = req.body.petId;
lanzamientos.Fecha   = req.body.Fecha;
lanzamientos.Plataforma = req.body.Plataforma;
lanzamientos.summary = req.body.summary; 

lanzamientos.save(function(err){
 
if(!err) {
console.log("actualizado");
   } else
    { console.log("ERROR: " + err);
}

res.send(lanzamientos);

});
});
}

// Borrar un lanzamiento

deleteVideo = function (req, res) {

Video.findById(req.params.id, function(err, lanzamientos) {
lanzamientos.remove(function(err) {
if(!err) {
    console.log("removed");
    }
    else {
     console.log("ERROR: " + err);
   }
 
})
});
}
 

// unir funciones

app.get("/lanzamientos", findAllVideo);
app.get("/lanzamientos/:id", findById);
app.post("/lanzamientos", addVideo);
app.put("/lanzamientos/:id", updateVideo);
app.delete("/lanzamientos:id", deleteVideo);
}
