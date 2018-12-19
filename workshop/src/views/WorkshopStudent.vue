<template>
  <div class="workshopStudents" v-if="collection">
      <WorkshopStudentTable :collection = "collection"></WorkshopStudentTable>
  </div>
</template>

<script>

import WorkshopStudentTable from '../components/WorkshopStudentTable.vue';

export default {
  name: 'workshopStudents',
  components: {
    WorkshopStudentTable,
  },
  data() {
    return {
      collection: null,
    };
  },
  created() {
    http.get('/workshops/'+ this.$route.params.id +'/students').then(response => {
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
};
</script>
