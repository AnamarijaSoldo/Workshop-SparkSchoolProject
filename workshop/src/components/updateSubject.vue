<template>
<div class="row d-flex justify-content-center">
<form v-if="sub" v-on:submit.prevent="updateSubject" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Id(workshop)</label>
<div class="col-5">
<input type="number" class="form-control" :value="sub[0].id_workshop" name="id_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-right  p-1 ">Id(instructor)</label>
<div class="col-5">
<input type="number" class="form-control" :value="sub[0].id_instructor" name="id_instructor">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left p-1">Name subject</label>
<div class="col-5">
<input type="string" class="form-control" :value="sub[0].name_subjects" name="name_subjects">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1 ">Payment</label>
<div class="col-5">
<input type="number" class="form-control" :value="sub[0].payment" name="payment">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1 ">Deleted</label>
<div class="col-5">
<input type="number" class="form-control" :value="sub[0].deleted" name="deleted">
</div>
</div>

<button class="btn btn-success">UPDATE</button>
</form>
</div>
</template>

<script>

export default {
  name: 'Subject',
  data() {
    return {
      msg: 'Welcome',
      sub: null,
    };
  },
  methods: {
    updateSubject(e) {

      const formData = new FormData(e.target);
      const newSubject = {};
      formData.forEach(function (value, key) {
        newSubject[key] = value;
      });
      const json = JSON.stringify(newSubject);

      http.put('/subjects/' + this.$route.params.id, newSubject)
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
    http.get('/subjects/' + this.$route.params.id)
      .then(response => {
        if (response.status === 200) {
          this.sub = response.data;
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
  text: center red;
}
</style>
