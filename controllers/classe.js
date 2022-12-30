import Classes from "../models/classe.js";
 
export async function createClasse(req,res) {
    const { clas, iduser } = req.body;
    const classe = new Classes();
    classe.class = clas
    classe.iduser = iduser
    await classe.save();
    res.status(201).send(classe);
    }


    export async function getAllClasses(req, res){
        var classes = await Classes.find();
        res.status(200).send({ classes });
      }



    export async function getUserClasses(req, res){
        const iduser = req.body.iduser

        const classes = await Classes.findOne({ iduser : iduser });
        res.status(200).send(classes);
      }

    
      export async function getClassesById(req, res){
        const id = req.body.idclasse;
        console.log(id);
        var classe = await Classes.findById(id);
        res.status(200).send(classe);
      }

      export async function updateClasses(req, res){
        const { idclasse,clas,userid } = req.body;
        const classe = await Classes.findById(idclasse);
        if (classe) {
            classe.clas = clas
            classe.userid = userid
          await Classes.save();
    
          res.status(201).send(classe);
        } else {
          
          res.status(301).send("erreur");
        }
      }