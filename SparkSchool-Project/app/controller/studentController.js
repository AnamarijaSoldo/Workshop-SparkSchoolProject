var Student = require('../model/studentModel.js');

exports.listAllStudents = function(req,res){

    Student.getAllStudents(function(err,result){
        console.log('student controller');
        if(err){
            res.send(err);
        } else {
            console.log('res: ',result);
            res.json(result);
        }
    });
};

exports.createStudent = function(req,res){

    var new_student = new Student(req.body);
    new_student.status=0;

   if(!new_student.student_name || 
    !new_student.student_lastname || 
    !new_student.mail || 
    !new_student.CV || 
    !new_student.telephone ||
    !new_student.comment){

            res.status(400).send({ error:true, message: ' Please provide some data ' });
   } else {
          Student.createStudent(new_student,function(err,result){
            if (err){
              res.send(err);
            } else {
              res.json(result);
            }
    });
 }
};


exports.readStudent = function(req,res){

    Student.getStudentById (req.params.studentId,function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

exports.updateStudent = function (req,res){

    Student.updateStudentById(req.params.studentId,new Student(req.body),function(err,result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

exports.deleteStudent = function(req, res) {

    Student.delete( req.params.studentId, function(err) {
      if (err){
        res.send(err);
      } else {
        res.json({ message: 'Student successfully deleted' });
      }
    });
};

exports.getStudentWorkshops = function(req, res) {
    
    Student.getStudentWorkshops(req.params.studentId, function(err, result) {
      if (err){
        res.send(err);
      } else {
      res.json(result);
      }
    });
  };
