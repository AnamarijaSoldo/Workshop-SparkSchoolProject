const sql = require('./db.js');

var Student = function(student){
    this.id_student = student.id_student;
    this.student_name = student.student_name;
    this.student_lastname = student.student_lastname;
    this.mail = student.mail;
    this.CV = student.CV;
    this.telephone = student.telephone;
    this.comment = student.comment;
    this.status = student.status;
    this.deleted = student.deleted;
}

Student.createStudent = function createStudent (newStudent,result){

    sql.query("INSERT INTO student SET ?",newStudent,function (err,res){
         if(err){
             console.log("ERROR: ",err);
             result(err,null);
         } else {
             console.log(res.insertId);
             result(null,res.insertId);
         }
    });
};

Student.getStudentById = function getStudentById(studentId,result){

    sql.query("SELECT * FROM student WHERE `id_student` = ?",studentId,function(err,res){
        if(err){
            console.log("ERROR: ",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });

};

Student.getAllStudents = function getAllStudents(result){

    sql.query("SELECT * FROM student WHERE deleted = 0 ",function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log("students: ",res);
            result(null,res);
        }
    });
};


Student.updateStudentById = function(id_student,student,result){

    sql.query("UPDATE student SET `student_name` = ?, `student_lastname` = ?,`mail` = ?,`CV` = ?,`telephone` = ?,`comment` = ?,`status` = ? , `deleted` = ? WHERE `id_student` = ?",[student.student_name,student.student_lastname,student.mail,student.CV,student.telephone,student.comment,student.status,student.deleted,id_student],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,true);
        }
    });
};


Student.delete = function(studentId,result){
    
    sql.query("UPDATE student SET deleted = 1 WHERE `id_student` = ?",[studentId],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};


Student.getStudentWorkshops = function(studentId,result){

    sql.query("SELECT workshop.id_workshop,workshop.name_workshop,workshop.cycle,workshop.start_workshop,workshop.end_workshop,workshop.duration,workshop.deleted,workshop.status FROM workshop_student INNER JOIN student ON workshop_student.id_student = student.id_student INNER JOIN workshop ON workshop_student.id_workshop = workshop.id_workshop WHERE workshop_student.id_student = ?", studentId, function(err,res){
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    }); 
};

module.exports = Student;
