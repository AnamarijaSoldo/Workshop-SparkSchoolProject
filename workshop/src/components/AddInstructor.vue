<template>

<div class="row d-flex justify-content-center align-items-center">
<form v-on:submit.prevent="addNewInstructor" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Firstname</label>
<div class="col-5">
<input type="text" class="form-control" name="name">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Lastname</label>
<div class="col-5">
<input type="text" class="form-control"  name="lastname">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Email</label>
<div class="col-5">
<input type="email" class="form-control"  name="mail">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">JMBG</label>
<div class="col-5">
<input type="number" class="form-control" name="JMBG">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Identity card</label>
<div class="col-5">
<input type="string" class="form-control"  name="identity_card">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Residence</label>
<div class="col-5">
<input type="text" class="form-control" name="residence">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Name bank</label>
<div class="col-5">
<input type="text" class="form-control" name="name_bank">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Bank account</label>
<div class="col-5">
<input type="number" class="form-control" name="bank_account">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Accession</label>
<div class="col-5">
<input type="date" class="form-control" name="accession_date">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Withdrawal</label>
<div class="col-5">
<input type="date" class="form-control" name="withdrawal_date">
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
  name: 'instructor',
   data() {
    return {
      msg: 'Welcome',
    };
  },
 methods: {
    addNewInstructor(e) {

      const formData = new FormData(e.target);
      var newInstructor = {};
      formData.forEach(function (value, key) { 
        newInstructor[key] = value;
      });
      const json = JSON.stringify(newInstructor);

      http.post('/instructors', newInstructor)
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
