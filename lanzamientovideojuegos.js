var mongoose = require ("mongoose"),

Schema       = mongoose.Schema;

var lanzamientosSchema = new Schema({


Titulo: {type: String },
Fecha:  {type: String },
Plataforma: {type: String, enum:
["PSV", "3DS", "WiiU", "Xbox-One", "PS4", "PC"]
    },

summary: {type: String}
});

module.exports = mongoose.model("Video", lanzamientosSchema);
     
