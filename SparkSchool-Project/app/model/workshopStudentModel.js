const sql = require('./db.js');

var studentWorkshop = function(studentInWorkshop){
   this.id_student_workshop = studentInWorkshop.id_student_workshop;
    this.id_workshop = studentInWorkshop.id_workshop;
    this.id_student = studentInWorkshop.id_student;
    this.comment = studentInWorkshop.comment;
    this.status = studentInWorkshop.status;

}

studentWorkshop.createStudentInWorkshop = function createStudentInWorkshop (newStudentinWorkshop,result){

    sql.query("INSERT INTO workshop_student SET ?",newStudentinWorkshop,function (err,res){
         if(err){
             console.log("ERROR: ",err);
             result(err,null);
         } else {
             console.log(res.insertId);
             result(null,res.insertId);
         }
    });
};

studentWorkshop.getStudentInWorkshopById = function getStudentInWorkshopById(workshopStudentId,result){

    sql.query("SELECT * FROM workshop_student WHERE `id_student_workshop` = ?",workshopStudentId,function(err,res){
        if(err){
            console.log("ERROR: ",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });

};

studentWorkshop.getAllStudentsInWorkshop = function getAllStudents(result){

    sql.query("SELECT * FROM workshop_student WHERE deleted = 0 ",function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log("Students in workshops: ",res);
            result(null,res);
        }
    });
};

studentWorkshop.updateStudentInWorkshopById = function(id_student_workshop,studentInWorkshop,result){
  
    sql.query("UPDATE workshop_student SET `id_workshop` = ?, `id_student` = ?,`comment` = ?,`status` =  ? , `deleted` = ? WHERE `id_student_workshop` = ?",[studentInWorkshop.id_workshop,studentInWorkshop.id_student,studentInWorkshop.comment,studentInWorkshop.status,studentInWorkshop.deleted,id_student_workshop],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,true);
        }
    
    });
   
};

studentWorkshop.delete = function(workshopStudentId,result){

    sql.query("UPDATE workshop_student SET deleted = 1 WHERE `id_student_workshop` = ?",[workshopStudentId],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};



module.exports = studentWorkshop;
