<template>
  <div class="instructorWorkshop" v-if="collection">
      <InstructorWorkshopTable :collection = "collection"></InstructorWorkshopTable>
  </div>
</template>

<script>

import InstructorWorkshopTable from '../components/InstructorWorkshopTable.vue';

export default {
  name: 'instructorWorkshop',
  components: {
    InstructorWorkshopTable,
  },
  data() {
    return {
      collection: null,
    };
  },
  created() {
    http.get('/instructors/'+ this.$route.params.id +'/workshops').then(response => {
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
};
</script>
