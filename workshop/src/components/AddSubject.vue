<template>

<div class="row d-flex justify-content-center align-items-center">
<form v-on:submit.prevent="addNewSubject" enctype="multipart/form-data">


<div class="form-group row">
<label class=" col-sm-2 col-form-label text-white text-left  p-1">Id(workshop)</label>
<div class="col-5">
<input type="number" class="form-control"  name="id_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Id(instructor)</label>
<div class="col-5">
<input type="number" class="form-control" name="id_instructor">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Name subject</label>
<div class="col-5">
<input type="string" class="form-control"  name="name_subjects">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Payment</label>
<div class="col-5">
<input type="number" class="form-control" name="payment">
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
  name: 'Subject',
  data() {
    return {
      msg: 'Welcome',
    };
  },
  methods: {
    addNewSubject(e) {

      const formData = new FormData(e.target);
      var newSubject = {};
      formData.forEach(function (value, key) {
        newSubject[key] = value;
      });
      const json = JSON.stringify(newSubject);

      http.post('/subjects', newSubject)
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
