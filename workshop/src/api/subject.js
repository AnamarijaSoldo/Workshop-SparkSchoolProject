import http from './http';

export default {
  getSubjects() {
    return http.get('/subject');
  },
  addNewSubject(subject) {
    return http.post('/subject', subject);
  },
  updateSubject(idSubjects, subject) {
    return http.put(`/subject/${idSubjects}`, subject);
  },
};
