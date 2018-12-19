<template>
  <div class="instructor px-4" v-if="collection">
  <div class="d-flex justify-content-between my-4">
  <input type="text"  placeholder="Search.." name="search" class="w-25" v-model="search"> 
    <button type="box" class="btn btn-black btn-primary w-25"
     @click="$router.push('/addInstructor')"><strong>Add</strong></button>
     </div>
  <table class="table table-bordered table-dark" align="center">
            <tr>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Mail</th>
                <th>Jmbg</th>
                <th>Identity card</th>
                <th>Residence</th>
                <th>Bank name</th>
                <th>Bank account</th>
                <th>Accession date</th>
                <th>Withdrawal date</th>
                <th>Status</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
           <tr v-for = "(item, index) in filterSearch" :key="index" class="instructor-row">
             <td class="bg-primary">{{item.id_instructor}}</a></td>
              <td>{{item.name}}</td>
              <td>{{item.lastname}}</td>
              <td>{{item.mail}}</td>
              <td>{{item.JMBG}}</td>
              <td>{{item.identity_card}}</td>
              <td>{{item.residence}}</td>
              <td>{{item.name_bank}}</td>
              <td>{{item.bank_account}}</td>
              <td>{{formatDate(item.accession_date)}}</td>
              <td>{{formatDate(item.withdrawal_date)}}</td>
              <td>{{item.status}}</td>
              <td @click="$router.push('/instructor/' + item.id_instructor + '/workshop')">workshop</td>
              <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
     @click="$router.push('/updateInstructor/'+ item.id_instructor)"><strong>Update</strong></button></td>
           <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
     @click="deleteInstructor(item.id_instructor)"><strong>Delete</strong></button></td>
        </tr>
      </table>
  </div>
  </div>
</template>

<script>

export default {
  name: 'instructor',
  data() {
    return {
      collection: null,
      search: '',
    };
  },
  computed: {
    filterSearch: function() {
      return this.collection.filter( instructor => {
        return instructor.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    getInstuctors: function () {
      http.get('/instructors').then(response => {
         this.collection = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteInstructor: function (id) {
      http.delete('instructors/' + id).then(
        response => {
          console.log('success');
          this.getInstuctors();
        },
      );
    },
    formatDate(myDate) {
      return new Date(myDate).toISOString().split('T')[0];
    },
  },
  created() {
    this.getInstuctors();
  },
};

</script>
