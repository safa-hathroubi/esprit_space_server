
import Notes from "../models/notes.js";
 
export async function createNote(req,res) {
    const { matiere, cc, examen, iduser } = req.body;
    const note = new Notes();
    note.matiere = matiere
    note.cc = cc
    note.examen = examen
    note.iduser = iduser
    await note.save();
    res.status(201).send(note);
    }

export async function getAllNotes(req, res){
        var notes = await Notes.find();
        res.status(200).send({ notes });
    }

    
export async function getUserNotes(req, res){
        const iduser = req.body.iduser

        const notes = await Notes.findOne({ iduser : iduser });
        res.status(200).send(notes);
    }
    
export async function getNotesById(req, res){
        const id = req.body.idnote;
        console.log(id);
        var note = await Notes.findById(id);
        res.status(200).send(note);
    }

export async function updateNotes(req, res){
        const { idnote,matiere, cc, examen,userid } = req.body;
        const note = await Notes.findById(idnote);
        if (note) {
            note.matiere = matiere
            note.cc = cc
            note.examen = examen
            note.userid = userid
          await Notes.save();
    
          res.status(201).send(note);
        } else {
          
          res.status(301).send("erreur");
        }
    }
	  

	

