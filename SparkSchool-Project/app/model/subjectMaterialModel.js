const sql = require('./db.js');

var subjectMaterial = function(subjectMat){
    this.id_subjects_materials = subjectMat.id_subjects_materials;
    this.id_subjects = subjectMat.id_subjects;
    this.name_materials = subjectMat.name_materials;
    this.link = subjectMat.link;
    this.deleted =subjectMat.deleted;
   
}

subjectMaterial.createSubjectMaterial = function (newSubjectMaterial,result){

    sql.query("INSERT INTO subjects_materials SET ?",newSubjectMaterial,function(err,res){
      if(err){
          console.log("ERROR: ",err);
          result(err,null);
      } else {
          console.log(res.insertId);
          result(null,res.insertId);
      }
    });
};

subjectMaterial.getSubjectMaterialById = function getSubjectMaterialById(subjectMaterialsId,result){

    sql.query("SELECT * FROM subjects_materials WHERE `id_subjects_materials` = ?",subjectMaterialsId,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

subjectMaterial.getAllSubjectsMaterials = function getAllSubjectsMaterials(result){

    sql.query("SELECT *FROM subjects_materials WHERE deleted = 0",function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log("Subjects materials :",res);
            result(null,res);
        }
    });
};

subjectMaterial.updateSubjectMaterialById = function(id_subjects_materials,subjectMat,result){

    sql.query("UPDATE subjects_materials SET `name_materials` = ?,`id_subjects` = ? , `link` = ? , `deleted` = ? WHERE `id_subjects_materials` = ?",[subjectMat.name_materials,subjectMat.id_subjects,subjectMat.link,subjectMat.deleted,id_subjects_materials],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(null,err);
        } else {
            result(null,true);
        }
    })
}
                             
subjectMaterial.delete = function(subjectMaterialId,result){

    sql.query("UPDATE subjects_materials SET deleted = 1 WHERE `id_subjects_materials` = ?",[subjectMaterialId],function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });             
};

subjectMaterial.getSubject = function (subjectMaterialId,result){
 
    sql.query("SELECT subjects.id_subjects,id_workshop,id_instructor,name_subjects FROM subjects_materials INNER JOIN subjects ON subjects_materials.id_subjects = subjects.id_subjects WHERE subjects_materials.id_subjects =?",subjectMaterialId , function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    });
};

module.exports = subjectMaterial;

