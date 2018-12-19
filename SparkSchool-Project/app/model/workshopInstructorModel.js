const sql = require('./db.js');

var workshopInstructor = function(workInst){
    this.id_workshop_instructor = workInst.id_workshop_instructor;
     this.id_workshop = workInst.id_workshop;
     this.id_instructor = workInst.id_instructor;
     this.status = workInst.status;
}

workshopInstructor.createInstructorWorkshop = function createInstructorWorkshop(newWorkshopInstructor,result){

    sql.query("INSERT INTO workshop_instructor SET ?",newWorkshopInstructor,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            console.log(res.insertId);
            result(null,res.insertId);
        }
    })
}

workshopInstructor.getWorkshopInstructorById = function getWorkshopInstructorById(workshopInstructorId,result){

    sql.query("SELECT * FROM workshop_instructor WHERE `id_workshop_instructor` =?",workshopInstructorId,function(err,res){
        if(err){
            console.log("ERROR :",err);
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

workshopInstructor.getAllInstructorsInWorkshops = function getAllInstructorsInWorkshops(result){

    sql.query("SELECT * FROM workshop_instructor  WHERE deleted = 0 ", function (err, res) {
        if(err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
          console.log(" All instructors in workshops : ", res);  
          result(null, res);
        }
    }) 
}

workshopInstructor.updateInstructorInWorkshopById = function(id_workshop_instructor,workInst, result){
    

    sql.query( "UPDATE workshop_instructor SET `id_workshop` = ?, `id_instructor` = ? ,`deleted` = ? , `status` = ?  WHERE `id_workshop_instructor` = ?", [workInst.id_workshop ,workInst.id_instructor ,workInst.deleted,workInst.status,  id_workshop_instructor], function (err, res) {
      if(err) {
          console.log("ERROR: ", err);
          result(err, null);
      } else {   
          result(null, true);
     }
    })
}

workshopInstructor.delete = function(workshopInstructorId, result){

    sql.query("UPDATE workshop_instructor SET deleted = 1 WHERE `id_workshop_instructor` = ?", [workshopInstructorId], function (err, res) {
            if(err) {
                console.log("ERROR: ", err);
                result(err, null);
            } else {
               result(null, res);
            }
    })
}



module.exports = workshopInstructor;
