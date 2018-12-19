<template>

<div class="row d-flex justify-content-center align-items-center">
<form v-on:submit.prevent="addNewWorkshop" enctype="multipart/form-data">

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Name</label>
<div class="col-5">
<input type="string" class="form-control"  name="name_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Cycle</label>
<div class="col-5">
<input type="number" class="form-control"  name="cycle">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Start</label>
<div class="col-5">
<input type="date" class="form-control" name="start_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">End</label>
<div class="col-5">
<input type="date" class="form-control"  name="end_workshop">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Duration</label>
<div class="col-5">
<input type="number" class="form-control" placeholder="in hours" name="duration">
</div>
</div>

<div class="form-group row">
<label class="col-sm-2 col-form-label text-white text-left  p-1">Payment</label>
<div class="col-5">
<input type="number" class="form-control" placeholder="KM" name="payment">
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

<button type="submit" class="btn btn-primary">ADD</button>

</form>
</div>
</template>

<script>

export default {
  name: 'workshop',
  data() {
    return {
      msg: 'Welcome',
    };
  },
  methods: {
    addNewWorkshop(e) {

      const formData = new FormData(e.target);
      const newWorkshop = {};
      formData.forEach(function(value, key) {
        newWorkshop[key] = value;
      });
      const json = JSON.stringify(newWorkshop);

      http.post('/workshops', newWorkshop)
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
