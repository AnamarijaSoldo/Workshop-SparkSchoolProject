import http from './http';

export default {
  getInstructors() {
    return http.get('/instructor');
  },
  addNewInstructor(instructor) {
    return http.post('/instructor', instructor);
  },
  updateInstructor(idInstructor, instructor) {
    return http.put(`/instructor/${idInstructor}`, instructor);
  },
};
