var Subject = require ('../model/subjectsModel.js');

exports.listAllSubjects = function(req,res){

    Subject.getAllSubjects(function(err,result){
        console.log(" subject controller ");
        if(err){
            res.send(err);
        } else {
            console.log('result :',result);
            res.json(result);
        }
    });
};

exports.createSubject = function (req,res){
 
    var new_subject = new Subject(req.body);
    
    if(!new_subject.id_workshop ||
       !new_subject.id_instructor ||
       !new_subject.name_subjects || 
       !new_subject.payment ){

        res.status(400).send({error:true , message:'Please provide some data'});
    } else {
        Subject.createSubject(new_subject,function(err,result){
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
};

exports.readSubject = function(req,res){

    Subject.getSubjectById(req.params.subjectId,function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};


exports.updateSubject = function(req, res) {

    Subject.updateSubjectById(req.params.subjectId, new Subject(req.body), function(err, result) {
      if (err){
        res.send(err);
      } else {
        res.json(result);
      }
  
    });
  };
  

exports.deleteSubject= function(req,res){

    Subject.delete(req.params.subjectId,function(err){
        if(err){
            res.send(err);
        } else {
            res.json({ message: 'Subject successfully deleted'});
        }
    });
};

exports.getSubjectsWorkshop = function(req, res) {
    
    Subject.getSubjectsWorkshop(req.params.subjectId, function(err, result) {
      if (err){
        res.send(err);
      } else {
      res.json(result);
      }
    });
  };

  exports.getSubjectMaterials = function(req, res) {
    
    Subject.getSubjectMaterials(req.params.subjectId, function(err, result) {
      if (err){
        res.send(err);
      } else {
      res.json(result);
      }
    });
  };