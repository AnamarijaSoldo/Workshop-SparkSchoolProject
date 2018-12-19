<template>
<div class="row d-flex justify-content-center ">
<form v-if="instructor" v-on:submit.prevent="updateInstructor" enctype="multipart/form-data">


<div class="form-group row">
<label class="col-sm-2 col-form-label text-left text-white text-left mo-0 p-1">First name</label>
<div class="col-5">
<input type="text" class="form-control" :value="instructor.name" name="name">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Last name</label>
<div class="col-5">
<input type="text-right" class="form-control" :value="instructor.lastname" name="lastname">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1 ">E-mail</label>
<div class="col-5">
<input type="email" class="form-control" :value="instructor.mail"  name="mail">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">JMBG</label>
<div class="col-5">
<input type="number" class="form-control":value="instructor.JMBG" name="JMBG">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">ID card</label>
<div class="col-5">
<input type="string" class="form-control" :value="instructor.identity_card" name="identity_card">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Residence</label>
<div class="col-5">
<input type="text" class="form-control" :value="instructor.residence" name="residence">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Name bank</label>
<div class="col-5">
<input type="text" class="form-control" :value="instructor.name_bank" name="name_bank">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Bank account</label>
<div class="col-5">
<input type="number" class="form-control":value="instructor.bank_account" name="bank_account">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Accession</label>
<div class="col-5">
<input type="date" class="form-control" :value="formatDate(instructor.accession_date)" name="accession_date">
</div>
</div>

<div class="form-group row flext-v-center">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Withdrawal</label>
<div class="col-5">
<input type="date" class="form-control" :value="formatDate(instructor.withdrawal_date)" name="withdrawal_date">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Status</label>
<div class="col-5">
<input type="number" class="form-control" :value="instructor.status" name="status">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Deleted</label>
<div class="col-5">
<input type="number" class="form-control" :value="instructor.deleted" name="deleted">
</div>
</div>

<button class="btn btn-success">UPDATE</button>
</form>
</div>
</template>

<script>

export default {
  name: 'updateInstructor',
  data() {
    return {
      msg: 'Welcome',
      instructor: null,
    };
  },
  methods: {
    updateInstructor(e) {
      const formData = new FormData(e.target);
      const newInstructor = {};
      formData.forEach(function (value, key) {
        newInstructor[key] = value;
      });
      const json = JSON.stringify(newInstructor);

      http.put('/instructors/' + this.$route.params.id, newInstructor)
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
    formatDate(myDate) {
      return new Date(myDate).toISOString().split('T')[0];
    },
  },
  created() {
    http.get('/instructors/' + this.$route.params.id)
      .then(response => {
        if (response.status === 200) {
          this.instructor = response.data[0];
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
.class{
 text-align: center;
}
</style>
