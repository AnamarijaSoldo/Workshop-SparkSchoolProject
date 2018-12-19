const sql = require('./db.js');


var Instructor = function(instructor){
    this.id_instructor = instructor.id_instructor;
    this.name = instructor.name;
    this.lastname = instructor.lastname;
    this.mail = instructor.mail;
    this.JMBG = instructor.JMBG;
    this.identity_card = instructor.identity_card;
    this.residence = instructor.residence;
    this.name_bank = instructor.name_bank;
    this.bank_account = instructor.bank_account;
    this.accession_date = instructor.accession_date;
    this.withdrawal_date = instructor.withdrawal_date;
    this.status = instructor.status;
    this.deleted= instructor.deleted;
}

Instructor.createInstructor = function createInstructor(newInstructor, result) {    
    sql.query("INSERT INTO instructor SET ?", newInstructor, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
    });           
};


Instructor.getInstructorById = function getInstructorById(instructorId, result) {

    sql.query("SELECT * FROM instructor WHERE id_instructor = ? ", instructorId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
    });   
};

Instructor.getAllInstructors = function getAllInstructors(result) {

    sql.query("SELECT * FROM instructor  WHERE deleted = 0 ", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
              console.log("Instructors : ", res);  
              result(null, res);
            }
    });   
};

Instructor.updateInstructorById = function(id_instructor,instructor, result){

    sql.query( " UPDATE instructor SET `name` = ?, `lastname` = ?, `mail` = ?, `JMBG`= ? , `identity_card` = ? , `residence` = ? , `name_bank` = ? , `bank_account` = ?, `accession_date` = ? , `withdrawal_date` = ? , `status` = ?  , `deleted` = ? WHERE id_instructor = ?", [instructor.name ,instructor.lastname , instructor.mail , instructor.JMBG , instructor.identity_card , instructor.residence , instructor.name_bank , instructor.bank_account , instructor.accession_date , instructor.withdrawal_date , instructor.status , instructor.deleted,  id_instructor], function (err,res) {
      if(err) {
          console.log("error: ", err);
          result(err, null);
      } else {   
          result(null, true);
     }
    }); 
};


Instructor.delete = function(instructorId, result){

    sql.query("UPDATE instructor SET deleted = 1 WHERE `id_instructor` = ?", [instructorId], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
               result(null, res);
            }
    }); 
};

Instructor.getInstructorInWorkshopById = function(instructorId,result){
    sql.query("SELECT workshop.name_workshop,cycle,start_workshop,end_workshop,duration,workshop.deleted,workshop.status FROM instructor LEFT JOIN workshop_instructor ON instructor.id_instructor=workshop_instructor.id_instructor LEFT JOIN workshop ON workshop_instructor.id_workshop=workshop.id_workshop WHERE instructor.id_instructor = ? ", instructorId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
}); 
};


module.exports = Instructor;
