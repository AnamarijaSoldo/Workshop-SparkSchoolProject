const sql = require('./db.js');

var Workshop = function(workshop){
    this.id_workshop = workshop.id_workshop;
    this.name_workshop = workshop.name_workshop;
    this.cycle = workshop.cycle;
    this.start_workshop = workshop.start_workshop;
    this.end_workshop = workshop.end_workshop;
    this.duration = workshop.duration;
    this.payment = workshop.payment;
    this.status = workshop.status;
    this.deleted=workshop.deleted;
}
 
Workshop.createWorkshop = function createWorkshop(newWorkshop,result){
   
    sql.query("INSERT INTO workshop SET ?",newWorkshop,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
           console.log(res.insertId);
           result(null,res.insertId);
        }
    });
};

Workshop.getWorkshopById = function getWorkshopById(workshopId,result){
     
    sql.query("SELECT * FROM workshop WHERE id_workshop = ?",workshopId,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

Workshop.getAllWorkshops = function getAllWorkshops(result){

    sql.query("SELECT * FROM workshop WHERE deleted = 0",function(err,res){
      if(err){
          console.log("ERROR:",err);
          result(err,null);
      } else {
          console.log("Workshops: ",res);
          result(null,res);
      }
    });
};


Workshop.updateWorkshopById = function (id_workshop,workshop,result){
   
    sql.query ("UPDATE workshop SET `name_workshop` = ?,`cycle` = ?,`start_workshop` = ?, `end_workshop` = ?,`duration` = ?,`payment` = ? ,  `status` = ? , `deleted` = ?  WHERE `id_workshop` =? ",[workshop.name_workshop,workshop.cycle,workshop.start_workshop,workshop.end_workshop,workshop.duration,workshop.payment,workshop.status,workshop.deleted,id_workshop],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result (null,res);
        }
    });
};

Workshop.delete = function(workshopId,result){

    sql.query("UPDATE workshop SET deleted = 1 WHERE `id_workshop` = ?",[workshopId],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};



Workshop.getWorkshopsById = function(students,result){
    sql.query("SELECT name_workshop,student.student_name,student.student_lastname FROM workshop LEFT JOIN workshop_student ON workshop.id_workshop=workshop_student.id_workshop LEFT JOIN student ON workshop_student.id_student=student.id_student WHERE workshop.id_workshop =?",students,function(err,res){
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    }); 
};

Workshop.getWorkshopStudents = function(workshopId, result) {
    sql.query("SELECT student.student_name,student.student_lastname,student.mail,student.comment,student.status,student.deleted FROM student INNER JOIN workshop_student ON student.id_student = workshop_student.id_student WHERE workshop_student.id_workshop = ?", workshopId, function(err,res){
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Workshop.getWorkshopInstructors = function(workshopId, result) {

    sql.query("SELECT instructor.name,instructor.lastname,instructor.mail,residence,accession_date,withdrawal_date,instructor.status,instructor.deleted FROM instructor INNER JOIN workshop_instructor ON instructor.id_instructor = workshop_instructor.id_instructor WHERE workshop_instructor.id_workshop = ?", workshopId, function(err,res){
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Workshop.getWorkshopSubjects = function(workshopId, result){

    sql.query("SELECT subjects.name_subjects FROM subjects INNER JOIN workshop ON subjects.id_workshop = workshop.id_workshop WHERE subjects.id_workshop =?",workshopId, function(err,res){
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Workshop;
