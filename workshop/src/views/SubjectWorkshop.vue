<template>
  <div class="subjectWorkshop">
      <SubjectWorkshopTable :collection = "collection"></SubjectWorkshopTable>
  </div>
</template>

<script>

import SubjectWorkshopTable from '../components/SubjectWorkshopTable.vue';

export default {
  name: 'subjectWorkshop',
  components: {
    SubjectWorkshopTable,
  },
  data() {
    return {
      collection: null,
    }
  },
  created() {
    http.get('/subjects/' + this.$route.params.id + '/workshops').then((response) => {
      console.log("nesto");
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
};
</script>
