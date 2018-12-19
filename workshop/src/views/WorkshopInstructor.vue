<template>
  <div class="workshopInstructor" v-if="collection">
      <WorkshopInstructorTable :collection = "collection"></WorkshopInstructorTable>
  </div>
</template>

<script>

import WorkshopInstructorTable from '../components/WorkshopInstructorTable.vue';

export default {
  name: 'workshopInstructor',
  components: {
    WorkshopInstructorTable,
  },
  data() {
    return {
      collection: null,
    };
  },
  created() {
    http.get('/workshops/'+ this.$route.params.id +'/instructors').then(response => {
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
};
</script>
