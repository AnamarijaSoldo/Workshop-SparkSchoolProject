module.exports = function(app) {


  
    // Instructor Route
    var instructorController = require('../controller/instructorController');

    app.route('/instructors')
      .get(instructorController.listAllInstructors)
      .post(instructorController.createInstructor);



    app.route('/instructors/:instructorId/workshops')
      .get(instructorController.getInstructorWorkshop);
   

     app.route('/instructors/:instructorId')
      .get(instructorController.readInstructor)
      .put(instructorController.updateInstructor)
      .delete(instructorController.deleteInstructor);




     // Student Route 

     var studentController = require('../controller/studentController');

      app.route('/students')
        .get(studentController.listAllStudents)
        .post(studentController.createStudent);
  

      app.route('/students/:studentId/workshops')
        .get(studentController.getStudentWorkshops);
       

      app.route('/students/:studentId')
        .get(studentController.readStudent)
        .put(studentController.updateStudent)
        .delete(studentController.deleteStudent);




     //Workshop Route 
    
    var  workshopController = require('../controller/workshopController');

    app.route('/workshops')
      .get(workshopController.listAllWorkshops)
      .post(workshopController.createWorkshop);

    app.route('/workshops/:workshopId/students')
      .get(workshopController.getWorkshopStudents);

    app.route('/workshops/:workshopId/instructors')
      .get(workshopController.getWorkshopInstructors);

    app.route('/workshops/:workshopId/subjects')
      .get(workshopController.getWorkshopSubjects);

    app.route('/workshops/:workshopId')
      .get(workshopController.readWorkshop)
      .put(workshopController.updateWorkshop)
      .delete(workshopController.deleteWorkshop);



     // Subject Route

     var subjectsController = require('../controller/subjectsController');

        app.route('/subjects')
        .get(subjectsController.listAllSubjects)
        .post(subjectsController.createSubject);

        app.route('/subjects/:subjectId/workshops')
        .get(subjectsController.getSubjectsWorkshop);

        app.route('/subjects/:subjectId/subjectMaterials')
         .get(subjectsController.getSubjectMaterials);

        app.route('/subjects/:subjectId')
        .get(subjectsController.readSubject)
        .put(subjectsController.updateSubject)
        .delete(subjectsController.deleteSubject);
      
        


    // Subject Material Route


    
    var subjectMaterialController = require('../controller/subjectMaterialController');

        app.route('/subjectMaterials')
            .get(subjectMaterialController.listAllSubjectMaterials)
            .post(subjectMaterialController.createSubjectMaterial);

            app.route('/subjectMaterials/:subjectMaterialId/subjects')
            .get(subjectMaterialController.getSubject);
   

        app.route('/subjectMaterials/:subjectMaterialId')
            .get(subjectMaterialController.readSubjectMaterial)
            .put(subjectMaterialController.updateSubjectMaterial)
            .delete(subjectMaterialController.deleteSubjectMaterial);
            
  

   //Workshop-Instructor Route
   
   var workshopInstructorController = require('../controller/workshopInstructorController');

    app.route('/workshopInstructor')
      .get(workshopInstructorController.listAllInstructorsInWorkshops)
      .post(workshopInstructorController.createInstructorWorkshop);


    app.route('/workshopInstructor/:workshopInstructorId')
      .get(workshopInstructorController.readInstructorWorkshop)
      .put(workshopInstructorController.updateInstructorWorkshop)
      .delete(workshopInstructorController.deleteWorkshopInstructor);



   //Workshop-Student Route
   
   var workshopStudentController = require('../controller/workshopStudentController');

   app.route('/workshopStudent')
     .get(workshopStudentController.listAllStudentsInWorkshops)
     .post(workshopStudentController.createStudentInWorkshop);


   app.route('/workshopStudent/:workshopStudentId')
     .get(workshopStudentController.readStudentInWorkshop)
     .put(workshopStudentController.updateStudentInWorkshop)
     .delete(workshopStudentController.deleteStudentInWorkshop);
};