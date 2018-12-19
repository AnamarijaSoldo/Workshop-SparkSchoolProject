import http from './http';

export default {
  getStudents() {
    return http.get('/student');
  },
  addNewStudent(student) {
    return http.post('/student', student);
  },
  updateStudent(idStudent, student) {
    return http.put(`/student/${idStudent}`, student);
  },
};
