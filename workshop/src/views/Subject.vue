<template>
  <div class="subject px-4" v-if="collection">
  <div class="d-flex justify-content-between my-4">
  <input type="text"  placeholder="Search.." name="search" class="w-25" v-model="search">
    <button type="box" class="btn btn-black btn-primary w-25"
     @click="$router.push('/addSubject')"><strong>Add</strong></button>
     </div>
    <table class="table table-bordered table-dark" align="center">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Id (workshop)</th>
                <th>Id (instructor)</th>
                <th>Payment</th>
                <th>View</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
             <tr v-for = "(item, index) in filterSearch" :key="index" class="subject-row">
             <td class="bg-primary">{{item.id_subjects}}</td>
              <td>{{item.name_subjects}}</td>
              <td>{{item.id_workshop}}</td>
              <td>{{item.id_instructor}}</td>
              <td>{{item.payment}}</td>
               <td @click="$router.push('/subject/' + item.id_subjects + '/workshops')">workshop</td>
               <td @click="$router.push('/subject/' + item.id_subjects + '/subjectMaterials')">subject material</td>
              <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
     @click="$router.push('/updateSubject/'+item.id_subjects)"><strong>Update</strong></button></td>
          <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
    @click="deleteSubject(item.id_subjects)"><strong>Delete</strong></button></td>
          </tr>
        </table>
  </div>
</template>

<script>


export default {
  name: 'subject',
  data() {
    return {
      collection: null,
      search: '',
    };
  },
  computed: {
    filterSearch: function () {
      return this.collection.filter(subject => {
        return subject.name_subjects.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    getSubjects: function () {
      http.get('/subjects').then(response => {
        this.collection = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteSubject: function (id) {
      http.delete('subjects/' + id).then(
        response => {
          console.log("success");
          this.getSubjects();
        },
      );
    },
  },
  created() {
    this.getSubjects();
  },
};
</script>
