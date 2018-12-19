<template>
<div class="row d-flex justify-content-center align-items-center">
<form v-if="workshop" v-on:submit.prevent="updateWorkshop" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Name</label>
<div class="col-10">
<input type="string" class="form-control" :value="workshop.name_workshop"  name="name_workshop" >
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Cycle</label>
<div class="col-10">
<input type="number" class="form-control" :value="workshop.cycle"  name="cycle">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Start</label>
<div class="col-10">
<input type="date" class="form-control" :value="formatDate(workshop.start_workshop)" name="start_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">End</label>
<div class="col-10">
<input type="date" class="form-control" :value="formatDate(workshop.end_workshop)" name="end_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Duration</label>
<div class="col-10">
<input type="number" class="form-control" :value="workshop.duration" placeholder="in hours" name="duration">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Payment</label>
<div class="col-10">
<input type="number" class="form-control" placeholder="KM" :value="workshop.payment" name="payment">
</div>
</div>

<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Deleted</label>
<div class="col-10">
<input type="number" class="form-control"  :value="workshop.deleted" name="deleted">
</div>
</div>


<div class="form-group row">
<label class="col-2 col-form-label text-white text-left  p-1">Status</label>
<div class="col-10">
<input type="number" class="form-control" :value="workshop.status" name="status">
</div>
</div>

<button class="btn btn-success">UPDATE</button><br/><br/>
</form>
</div>
</template>

<script>

export default {
  name: 'workshop',
  data() {
    return {
      msg: 'Welcome',
      workshop: null,
    };
  },
  methods: {
    updateWorkshop(e) {
      const formData = new FormData(e.target);
      const newWorkshop = {};
      formData.forEach(function (value, key) {
        newWorkshop[key] = value;
      });
      const json = JSON.stringify(newWorkshop);

      http.put('/workshops/' + this.$route.params.id, newWorkshop)
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
    http.get('/workshops/' + this.$route.params.id)
      .then(response => {
        if (response.status === 200) {
          this.workshop = response.data[0];
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
  width: 300px;
  background-color:#F0FFFF;
  }
table{
  border:0;
  text-align:left;
  background-color:#b3cccc;
}
</style>
