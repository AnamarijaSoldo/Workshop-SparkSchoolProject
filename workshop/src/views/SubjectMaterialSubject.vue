<template>
  <div class="SubjectMaterialSubject">
    <table class="table table-bordered table-dark" align="center">
          <tr>
              <th>Name (subject)</th>
              <th>Id (subject)</th>
              <th>Id (workshop)</th>
              <th>Id(instructor)</th>
          </tr>
          <tr v-for = "(item, index) in collection" :key="index" class="subjectMaterialSubject-row"
           @click="$router.push('/subjectMaterial/')">
              <td>{{item.name_subjects}}</td>
              <td>{{item.id_subjects}}</td>
              <td>{{item.id_workshop}}</td>
              <td>{{item.id_instructor}}</td>
          </tr>
      </table>
  </div>
</template>

<script>


export default {
  name: 'subjectMaterialsubject',
  data() {
    return {
      collection: null,
    }
  },
  created() {
    http.get('/subjectMaterials/' + this.$route.params.id + '/subjects').then((response) => {
      console.log("nesto");
      this.collection = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
};
</script>
