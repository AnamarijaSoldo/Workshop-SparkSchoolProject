var studentsInWorkshop = require ('../model/workshopStudentModel.js');

exports.listAllStudentsInWorkshops = function(req,res){

    studentsInWorkshop.getAllStudentsInWorkshop(function(err,result){
        console.log('workshop-student controller');
        if(err){
          res.send(err);
        } else {
          res.json(result);
        }
    });
};

exports.createStudentInWorkshop = function(req,res){
 
   var new_workshop_student = new studentsInWorkshop (req.body);
   new_workshop_student.status=0;

   if(!new_workshop_student.id_workshop || 
      !new_workshop_student.id_student ||
      !new_workshop_student.comment){

       res.status(400).send({ error:true, message:'Please provide some data'});
   } else {
    studentsInWorkshop.createStudentInWorkshop(new_workshop_student,function(err,result){
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
      });
   }
};


exports.readStudentInWorkshop = function(req,res){

    studentsInWorkshop.getStudentInWorkshopById(req.params.workshopStudentId,function(err,result){
      if(err){
          res.send(err);
      } else {
          res.json(result);
      }
    });
};

exports.updateStudentInWorkshop = function(req,res){

    studentsInWorkshop.updateStudentInWorkshopById(req.params.workshopStudentId,new studentsInWorkshop(req.body),function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

exports.deleteStudentInWorkshop = function (req,res){
 
    studentsInWorkshop.delete(req.params.workshopStudentId,function(err){
        if(err){
            res.send(err);
        } else {
            res.json({ message : 'workshop-student successfully deleted'});
        }
    });
};

