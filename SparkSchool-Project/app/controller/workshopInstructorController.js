var workshopInstructor = require('../model/workshopInstructorModel.js');

exports.listAllInstructorsInWorkshops = function(req, res) {
    workshopInstructor.getAllInstructorsInWorkshops(function(err, result) {

    console.log('workshop-instructor controller')
    if (err) {
      res.send(err);
    } else {
      console.log('Result : ', result);
      res.send(result);
    }
  });
};



exports.createInstructorWorkshop = function(req, res) {
 
  var new_workshop_instructor = new workshopInstructor(req.body);
  new_workshop_instructor.status=0;
  
   if(!new_workshop_instructor.id_workshop ||
     !new_workshop_instructor.id_instructor ){

            res.status(400).send({ error:true, message: 'Please provide some data'});
  } else {
    workshopInstructor.createInstructorWorkshop(new_workshop_instructor, function(err, result) {
    if (err){
      res.send(err);
    } else {
    res.json(result);
    }

  });
}
};

exports.readInstructorWorkshop = function(req, res) {
  workshopInstructor.getWorkshopInstructorById(req.params.workshopInstructorId, function(err, result) {
    if (err){
      res.send(err);
    } else {
    res.json(result);
    }
  });
};

exports.updateInstructorWorkshop = function(req, res) {
    workshopInstructor.updateInstructorInWorkshopById(req.params.workshopInstructorId, new workshopInstructor(req.body), function(err, result) {
    if (err){
      res.send(err);
    } else {
    res.json(result);
    }
  });
};


exports.deleteWorkshopInstructor = function(req, res) {
    workshopInstructor.delete( req.params.workshopInstructorId, function(err) {
    if (err){
      res.send(err);
    } else {
    res.json({ message: 'Workshop-Instructor successfully deleted' });
    }
  });
};
