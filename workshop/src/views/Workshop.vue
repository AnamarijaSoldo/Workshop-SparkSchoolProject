<template>
  <div class="workshop px-4" v-if="collection">
  <div class="d-flex justify-content-between my-4">
  <input type="text"  placeholder="Search.." name="search" class="w-25" v-model="search"> 
    <button type="box" class="btn btn-black btn-primary w-25"
     @click="$router.push('/addWorkshop')"><strong>Add</strong></button>
     </div>
      <table class="table table-hover table-dark" align="center">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Cycle</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
              <th>Payment</th>
              <th>Status</th>
              <th>View instructors</th>
              <th>View students</th>
              <th>Update</th>
              <th>Delete</th>
          </tr>
          <tr v-for ="(item, index) in filterSearch" :key="index" class ="workshop-row">
            <td class="bg-primary">{{item.id_workshop}}</td>
              <td>{{item.name_workshop}}</option></td>
              <td>{{item.cycle}}</td>
              <td>{{formatDate(item.start_workshop)}}</td>
              <td>{{formatDate(item.end_workshop)}}</td>
              <td>{{item.duration}}</td>
              <td>{{item.payment}}</td>
              <td>{{item.status}}</td>
              <td @click="$router.push('/workshop/' + item.id_workshop + '/instructors')">instructor</td>
              <td @click="$router.push('/workshop/' + item.id_workshop + '/students')">student</td>
             <td> <button type="box" class="btn btn-large btn-black btn-primary full-width"
             @click="$router.push('/updateWorkshop/' + item.id_workshop)"><strong>Update</strong></button></td>
             <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
             @click="deleteWorkshop(item.id_workshop)"><strong>DELETE</strong></button></td>
          </tr>
      </table>
  </div>
</template>

<script>


export default {
  name: 'workshop',
  data() {
    return {
      collection: null,
      search: '',
    };
  },
  computed: {
    filterSearch: function () {
      return this.collection.filter( workshop => {
        return workshop.name_workshop.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    getWorkshops: function () {
      http.get('/workshops').then(response => {
        this.collection = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteWorkshop: function (id) {
      http.delete('workshops/' + id).then(
        response => {
          console.log('success');
          this.getWorkshops();
        },
      );
    },
    formatDate(myDate) {
      return new Date(myDate).toISOString().split('T')[0];
    },
  },
  created() {
    this.getWorkshops();
  },
};
</script>
