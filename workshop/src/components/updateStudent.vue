<template>
<div class="row d-flex justify-content-center align-items-center">
<form v-if="student" v-on:submit.prevent="updateStudent" enctype="multipart/form-data">


<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">First name</label>
<div class="col-5">
<input type="text" class="form-control" :value="student.student_name" name="student_name">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Last name</label>
<div class="col-5">
<input type="text" class="form-control" :value="student.student_lastname" name="student_lastname">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">E-mail</label>
<div class="col-5">
<input type="email" class="form-control" :value="student.mail" name="mail">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Biografy</label>
<div class="col-5">
<input type="url" class="form-control" :value="student.CV" name="CV">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Telephone</label>
<div class="col-5">
<input type="tel" class="form-control" :value="student.telephone" name="telephone">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Comment</label>
<div class="col-5">
<input type="text" class="form-control" :value="student.comment" name="comment">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Status</label>
<div class="col-5">
<input type="number" class="form-control" :value="student.status" name="status">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Deleted</label>
<div class="col-5">
<input type="number" class="form-control" :value="student.deleted" name="deleted">
</div>
</div>

<button class="btn btn-success">UPDATE</button>
</form>
</div>
</template>

<script>

export default {
  name: 'student',
  data() {
    return {
      msg: 'Welcome',
      student: '',
    };
  },
  methods: {
    updateStudent(e) {

      const formData = new FormData(e.target);
      const newStudent = {};
      formData.forEach(function (value, key) {
        newStudent[key] = value;
      });
      const json = JSON.stringify(newStudent);

      http.put('/students/' + this.$route.params.id, newStudent)
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
    http.get('/students/' + this.$route.params.id)
      .then(response => {
        if (response.status === 200) {
          this.student = response.data[0];
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
