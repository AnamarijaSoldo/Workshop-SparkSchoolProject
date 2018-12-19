var subjectMaterial = require('../model/subjectMaterialModel.js');

exports.listAllSubjectMaterials = function(req,res){

    subjectMaterial.getAllSubjectsMaterials(function(err,result){
        console.log("controller for subject materials");
            if(err){
                res.send(err);
            } else {
                console.log("res: ",result);
                res.json(result);
            }
    })
}


exports.createSubjectMaterial = function(req,res){

    var new_subject_material = new subjectMaterial(req.body);

    if(!new_subject_material.id_subjects  ||
       !new_subject_material.name_materials ||
       !new_subject_material.link){

        res.status(400).send({error:true,message:' Please provide some data '});
    } else {
        subjectMaterial.createSubjectMaterial(new_subject_material,function(err,result){
          if(err){
              res.send(err);
          } else {
              res.json(result);
          }
        })
    }
}


exports.readSubjectMaterial = function(req,res){

    subjectMaterial.getSubjectMaterialById (req.params.subjectMaterialId,function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};


exports.updateSubjectMaterial = function(req,res){
     
    subjectMaterial.updateSubjectMaterialById(req.params.subjectMaterialId, new subjectMaterial(req.body),function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    })
}

exports.deleteSubjectMaterial = function(req,res){
    
    subjectMaterial.delete(req.params.subjectMaterialId,function(err){
        if(err){
            res.send(err);
        } else {
            res.json({ message :'Subject material successfully deleted'});
        }
    })
}

exports.getSubject = function(req, res) {
    
    subjectMaterial.getSubject(req.params.subjectMaterialId, function(err, result) {
      if (err){
        res.send(err);
      } else {
      res.json(result);
      }
    });
  };