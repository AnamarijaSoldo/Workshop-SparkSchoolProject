import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import workshop from './components/WorkshopsTable.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/workshop',
      name: 'workshops',
      component: () => import('./views/Workshop.vue'),
    },
    {
      path: '/instructor/:id',
      name: 'instructor',
      component: () => import('./views/Instructor.vue'),
    },
    {
      path: '/workshop/:id/instructors',
      name: 'workshopInstructors',
      component: () => import('./views/WorkshopInstructor.vue'),
    },
    {
      path: '/workshop/:id/students',
      name: 'workshopStudents',
      component: () => import('./views/WorkshopStudent.vue'),
    },
    {
      path: '/instructor/:id/workshop',
      name: 'instructorWorkshop',
      component: () => import('./views/InstructorWorkshop.vue'),
    },
    {
      path: '/instructor',
      name: 'instructors',
      component: () => import('./views/Instructor.vue'),
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue'),
    },
    {
      path: '/student/:id/workshop',
      name: 'StudentWorkshop',
      component: () => import('./views/StudentWorkshop.vue'),
    },
    {
      path: '/subject',
      name: 'subject',
      component: () => import('./views/Subject.vue'),
    },
    {
      path: '/subjectMaterial',
      name: 'subjectMaterial',
      component: () => import('./views/SubjectMaterial.vue'),
    },
    {
      path: '/subject/:id/subjectMaterials',
      name: 'materialForSubject',
      component: () => import('./views/SubSubjectMaterial.vue'),
    },
    {
      path: '/subject/:id/workshops',
      name: 'subjectWorkshop',
      component: () => import('./views/SubjectWorkshop.vue'),
    },
    {
      path: '/subjectMaterial/:id/subject',
      name: 'subjectMaterialsubject',
      component: () => import('./views/SubjectMaterialSubject.vue'),
    },
    {
      path: '/addWorkshop',
      name: 'AddWorkshop',
      component: () => import('./components/AddWorkshop.vue'),
    },
    {
      path: '/addInstructor',
      name: 'addInstructor',
      component: () => import('./components/AddInstructor'),
    },
    {
      path: '/addStudent',
      name: 'addStudent',
      component: () => import('./components/AddStudent'),
    },
    {
      path: '/addSubjectMaterial',
      name: 'addSubjectMaterial',
      component: () => import('./components/AddSubjectMaterial'),
    },
    {
      path: '/addSubject',
      name: 'addSubject',
      component: () => import('./components/AddSubject'),
    },
    {
      path: '/updateWorkshop/:id',
      name: 'updateWorkshop',
      component: () => import('./components/updateWorkshop.vue'),
    },
    {
      path: '/updateInstructor/:id',
      name: 'updateInstructor',
      component: () => import('./components/updateInstructor.vue'),
    },
    {
      path: '/updateStudent/:id',
      name: 'updateStudent',
      component: () => import('./components/updateStudent.vue'),
    },
    {
      path: '/updateSubject/:id',
      name: 'updateSubject',
      component: () => import('./components/updateSubject.vue'),
    },
    {
      path: '/updateSubjectMaterial/:id',
      name: 'updateSubjectMaterial',
      component: () => import('./components/updateSubjectMaterial.vue'),
    },
  ],
});
