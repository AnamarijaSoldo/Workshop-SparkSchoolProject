import http from './http';

export default {
  getsubjectMaterial() {
    return http.get('/subjectMaterial');
  },
  addNewSubjectMaterial(subjectMaterial) {
    return http.post('/subjectMaterial', subjectMaterial);
  },
  updateSubjectMaterial(idSubjectMaterial, subjectMaterial) {
    return http.put(`/subjectMaterial/${idSubjectMaterial}`, subjectMaterial);
  },
};
