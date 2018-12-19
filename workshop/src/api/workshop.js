import http from './http';

export default {
  getWorkshops() {
    return http.get('/workshop');
  },
  addNewWorkshop(workshop) {
    return http.post('/workshop', workshop);
  },
  updateWorkshop(idWorkshop, workshop) {
    return http.put(`/workshop/${idWorkshop}`, workshop);
  },
};
