<template>
<div class="row d-flex justify-content-center align-items-center">
<form v-if="subjectMat" v-on:submit.prevent="updateSubjectMaterial" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Id subjects</label>
<div class="col-5">
<input type="number" class="form-control" :value="subjectMat.id_subjects" name="id_subjects">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-0">Name material</label>
<div class="col-5">
<input type="string" class="form-control" :value="subjectMat.name_materials" name="name_materials">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Link</label>
<div class="col-5">
<input type="url" class="form-control" :value="subjectMat.link" name="link">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left p-1">Deleted</label>
<div class="col-5">
<input type="number" class="form-control" :value="subjectMat.deleted" name="deleted">
</div>
</div>


<button class="btn btn-success">UPDATE</button>
</form>
</div>
</template>

<script>

export default {
  name: 'subjectMat',
  data() {
    return {
      msg: 'Welcome',
      subjectMat: null,
    };
  },
 methods: {
    updateSubjectMaterial(e) {

      const formData = new FormData(e.target);
      const newWSubjectMaterial = {};
      formData.forEach(function (value, key) {
      newWSubjectMaterial[key] = value;
      });
      const json = JSON.stringify(newWSubjectMaterial);

      http.put('/subjectMaterials/' + this.$route.params.id, newWSubjectMaterial)
        .then((response) => {
          if (response.status === 200) {
            console.log('Successfully');
            this.$router.go(-1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
    created() {
    http.get('/subjectMaterials/' + this.$route.params.id)
     .then(response => {
       if (response.status === 200) {
         this.subjectMat = response.data[0];
       }
     });
   },
};
</script>
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
  }
input{
  width:500px;
}
</style>
