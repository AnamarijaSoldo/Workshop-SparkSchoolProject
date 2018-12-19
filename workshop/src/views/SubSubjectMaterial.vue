<template>
  <div class="materialForSubject" v-if="collection">
      <SubSubjectMaterialTable :collection = "collection"></SubSubjectMaterialTable>
  </div>
</template>

<script>

import SubSubjectMaterialTable from '../components/SubSubjectMaterialTable.vue';

export default {
  name: 'materialForSubject',
  components: {
    SubSubjectMaterialTable,
  },
  data() {
    return {
      collection: null,
    };
  },
  created() {
    http.get('/subjects/' + this.$route.params.id + '/subjectMaterials').then(response => {
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  },
};
</script>
