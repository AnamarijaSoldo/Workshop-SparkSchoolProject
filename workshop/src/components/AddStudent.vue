<template>
<div class="row d-flex justify-content-center align-items-center">
<form v-on:submit.prevent="addNewStudent" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">First name</label>
<div class="col-5">
<input type="text" class="form-control"  name="student_name">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Last name</label>
<div class="col-5">
<input type="text" class="form-control" name="student_lastname">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Mail</label>
<div class="col-5">
<input type="email" class="form-control"  name="mail">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Biografy</label>
<div class="col-5">
<input type="url" class="form-control" name="CV">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Telephone</label>
<div class="col-5">
<input type="tel" class="form-control"  name="telephone">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Comment</label>
<div class="col-5">
<input type="text" class="form-control" name="comment">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Status</label>
<div class="col-5">
<input type="number" class="form-control" name="status">
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
  name: 'student',
  data() {
    return {
      msg: 'Welcome',
    };
  },
    methods: {
    addNewStudent(e) {

      const formData = new FormData(e.target);
      var newStudent = {};
      formData.forEach(function(value, key) {
          newStudent[key] = value;
      });
      const json = JSON.stringify(newStudent);

      http.post('/students', newStudent)
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
