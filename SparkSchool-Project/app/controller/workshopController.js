var Workshop = require ('../model/workshopModel.js');

exports.listAllWorkshops = function(req,res){

    Workshop.getAllWorkshops(function(err,result){
        console.log('workshop controller');
        if(err){
          res.send(err);
        } else {
          res.json(result);
        }
    });
};

exports.createWorkshop = function(req,res){
 
   var new_workshop = new Workshop (req.body);
   new_workshop.status = 0;
   
   if(!new_workshop.name_workshop || 
      !new_workshop.cycle || 
      !new_workshop.start_workshop || 
      !new_workshop.end_workshop || 
      !new_workshop.duration || 
      !new_workshop.payment ){
          
       res.status(400).send({ error:true, message:'Please provide some data'});
   } else {
       Workshop.createWorkshop(new_workshop,function(err,result){
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
      });
   }
};


exports.readWorkshop = function(req,res){

    Workshop.getWorkshopById(req.params.workshopId,function(err,result){
      if(err){
          res.send(err);
      } else {
          res.json(result);
      }
    });
};

exports.updateWorkshop = function(req,res){

    Workshop.updateWorkshopById(req.params.workshopId,new Workshop(req.body),function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

exports.deleteWorkshop = function (req,res){
 
    Workshop.delete(req.params.workshopId,function(err){
        if(err){
            res.send(err);
        } else {
            res.json({ message : 'Workshop successfully deleted'});
        }
    });
};

exports.getStudentWorkshop = function(req, res) {

    Workshop.getWorkshopsById(req.params.students,function(err,result){
      if (err){
        res.send(err);
      } else {
        res.json(result);
      }
  
  });
};

exports.getWorkshopStudents = function(req, res) {

    Workshop.getWorkshopStudents(req.params.workshopId, function(err, result) {
        if (err){
            res.send(err);
          } else {
            res.json(result);
          }
    });
};

exports.getWorkshopInstructors = function(req, res) {
    
    Workshop.getWorkshopInstructors(req.params.workshopId, function(err, result) {
        if (err){
            res.send(err);
          } else {
            res.json(result);
          }
    });
};

exports.getWorkshopSubjects = function(req, res) {
    
    Workshop.getWorkshopSubjects(req.params.workshopId, function(err, result) {
        if (err){
            res.send(err);
          } else {
            res.json(result);
          }
    });
};