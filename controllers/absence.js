import Absences from "../models/absence.js";
 
export async function createAbs(req,res) {
    const { matiere, date, justificatif, iduser } = req.body;
    const absence = new Absences();
    absence.matiere = matiere
    absence.date = date
    absence.justificatif = justificatif
    absence.iduser = iduser
    await absence.save();
    res.status(201).send(absence);
    }


export async function getAllAbs(req, res){
        var absences = await Absences.find();
        res.status(200).send({ absences });
    }


export async function getUserAbs(req, res){
        const iduser = req.body.iduser

        const absences = await Absences.findOne({ iduser : iduser });
        res.status(200).send(absences);
    }
    

export async function getAbsById(req, res){
        const id = req.body.idabs;
        console.log(id);
        var absence = await Absences.findById(id);
        res.status(200).send(absence);
    }

export async function updateAbs(req, res){
        const { idabs,matiere, date, justificatif,userid } = req.body;
        const absence = await Absences.findById(idabs);
        if (absence) {
            absence.matiere = matiere
            absence.date = date
            absence.justificatif = justificatif
            absence.userid = userid
          await Absences.save();
    
          res.status(201).send(absence);
        } else {
          
          res.status(301).send("erreur");
        }
    }