<template>

<div class="row d-flex justify-content-center align-items-center">
<form v-on:submit.prevent="addNewSubjectMaterial" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Id subjects</label>
<div class="col-5">
<input type="number" class="form-control"  name="id_subjects">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-0">Name material</label>
<div class="col-5">
<input type="string" class="form-control" name="name_materials">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Link</label>
<div class="col-5">
<input type="url" class="form-control"  name="link">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Deleted</label>
<div class="col-5">
<input type="number" class="form-control" name="deleted">
</div>
</div>

<button type="submit" class="btn btn-success">ADD</button>
</form>
</div>
</template>

<script>

export default {
  name: 'subjectMaterial',
  data() {
    return {
      msg: 'Welcome',
    };
  },
 methods: {
    addNewSubjectMaterial(e) {

      const formData = new FormData(e.target);
      var newWSubjectMaterial = {};
      formData.forEach(function (value, key) {
        newWSubjectMaterial[key] = value;
      });
      const json = JSON.stringify(newWSubjectMaterial);

      http.post('/subjectMaterials', newWSubjectMaterial)
        .then((response) => {
          if (response.status === 200) {
            console.log('Successfully added');
            this.$router.go(-1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
input {
  width: 500px;
}
</style>
