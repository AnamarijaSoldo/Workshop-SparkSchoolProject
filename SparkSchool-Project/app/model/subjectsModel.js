const sql = require('./db.js');

var Subject = function(subject){
    this.id_subjects = subject.id_subjects;
    this.id_workshop = subject.id_workshop;
    this.id_instructor = subject.id_instructor;
    this.name_subjects = subject.name_subjects;
    this.payment = subject.payment;
    this.deleted = subject.deleted;
}

Subject.createSubject = function createSubject(newSubject,result){

    sql.query("INSERT INTO subjects SET ?",newSubject,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};


Subject.getSubjectById = function getSubjectById(subjectId,result){

    sql.query("SELECT * FROM subjects WHERE `id_subjects` = ?",subjectId,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

Subject.getAllSubjects = function getAllSubjects(result){

    sql.query("SELECT * FROM subjects WHERE deleted = 0 ",function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log("Subjects :",res);
            result(null,res);
        }
    });
};



Subject.updateSubjectById = function(id_subjects,subject, result){
 
     sql.query( " UPDATE subjects SET `id_workshop` = ?,`id_instructor`= ?,`name_subjects` = ?,`payment` = ? , `deleted` = ? WHERE `id_subjects` = ?", [subject.id_workshop,subject.id_instructor,subject.name_subjects,subject.payment,subject.deleted,id_subjects], function (err,res) {
       if(err) {
           console.log("error: ", err);
           result(err, null);
       } else {   
           result(null, true);
      }
     }); 
 };

Subject.delete = function(subjectId,result){

    sql.query("UPDATE subjects SET deleted = 1 WHERE `id_subjects` = ?",[subjectId],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result (null,res);
        }
    });
};

Subject.getSubjectsWorkshop = function (subjectId,result){

    sql.query("SELECT workshop.id_workshop,workshop.name_workshop FROM subjects INNER JOIN workshop ON subjects.id_workshop = workshop.id_workshop WHERE subjects.id_subjects = ?", subjectId, function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

Subject.getSubjectMaterials = function (subjectId,result){
 
    sql.query("SELECT name_materials,link FROM subjects_materials INNER JOIN subjects ON subjects_materials.id_subjects = subjects.id_subjects WHERE subjects_materials.id_subjects =?",subjectId , function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

module.exports = Subject;
