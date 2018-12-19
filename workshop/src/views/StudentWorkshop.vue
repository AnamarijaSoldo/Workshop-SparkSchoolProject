<template>
  <div class="StudentWorkshop" v-if="collection">
      <StudentWorkshopTable :collection = "collection"></StudentWorkshopTable>
  </div>
</template>

<script>

import StudentWorkshopTable from '../components/StudentWorkshopTable.vue';

export default {
  name: 'StudentWorkshop',
  components: {
    StudentWorkshopTable,
  },
  data() {
    return {
      collection: null,
    };
  },
  created() {
    http.get('/students/' + this.$route.params.id + '/workshops').then(response => {
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
};
</script>
