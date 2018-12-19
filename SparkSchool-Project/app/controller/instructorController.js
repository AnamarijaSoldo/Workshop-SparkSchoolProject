var Instructor = require('../model/instructorModel.js');



exports.listAllInstructors = function(req,res) {

  Instructor.getAllInstructors(function(err,result) {
    console.log(' instructor controller ');
        if (err) {
            res.send(err);
        } else {
            console.log('res: ',result);
            res.json(result);
        }
    });

};


exports.createInstructor = function(req, res) {

  var new_instructor = new Instructor(req.body);
  new_instructor.status=0;
  
   if(!new_instructor.name || 
      !new_instructor.lastname || 
      !new_instructor.mail || 
      !new_instructor.JMBG || 
      !new_instructor.identity_card || 
      !new_instructor.residence || 
      !new_instructor.name_bank || 
      !new_instructor.bank_account || 
      !new_instructor.accession_date || 
      !new_instructor.withdrawal_date){
        
            res.status(400).send({ error:true, message: ' Please provide some data ' });
   } else {
          Instructor.createInstructor(new_instructor,function(err,result){
            if (err){
              res.send(err);
            } else {
              res.json(result);
             
            }
    }); 
  } 

};

exports.readInstructor= function(req, res) {

      Instructor.getInstructorById(req.params.instructorId,function(err,result){
        if (err){
          res.send(err);
        } else {
          res.json(result);
        }

    });
};

exports.updateInstructor = function(req, res) {

  Instructor.updateInstructorById(req.params.instructorId, new Instructor(req.body), function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.json(result);
    }

  });
};


exports.deleteInstructor = function(req, res) {

  Instructor.delete( req.params.instructorId, function(err) {
    if (err){
      res.send(err);
    } else {
      res.json({ message: 'Instructor successfully deleted' });
    }
  });
};

exports.getInstructorWorkshop = function(req, res) {
  Instructor.getInstructorInWorkshopById(req.params.instructorId,function(err,result){
    if (err){
      res.send(err);
    } else {
      res.json(result);
    }

});
};





