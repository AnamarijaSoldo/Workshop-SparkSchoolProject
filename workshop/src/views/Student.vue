<template>
  <div class="student px-4" v-if="collection">
  <div class="d-flex justify-content-between my-4">
  <input type="text"  placeholder="Search.." name="search" class="w-25" v-model="search"> 
    <button type="box" class="btn btn-black btn-primary w-25"
     @click="$router.push('/addStudent')"><strong>Add</strong></button>
     </div>
         <table class="table table-bordered table-dark" align="center">
            <tr>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Mail</th>
                <th>Biografy</th>
                <th>Telephone</th>
                <th>Comment</th>
                <th>Status</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
           <tr v-for = "(item, index) in filterSearch" :key="index" class="student-row">
              <td class="bg-primary">{{item.id_student}}</td>
              <td>{{item.student_name}}</td>
              <td>{{item.student_lastname}}</td>
              <td>{{item.mail}}</td>
              <td>{{item.CV}}</td>
              <td>{{item.telephone}}</td>
              <td>{{item.comment}}</td>
              <td>{{item.status}}</td>
              <td @click="$router.push('/student/' + item.id_student + '/workshop')">workshop</td>
              <td><button type="box" class="btn btn-large btn-black btn-primary full-width" 
     @click="$router.push('/updateStudent/' + item.id_student)"><strong>Update</strong></button></td>
             <td><button type="box" class="btn btn-large btn-black btn-primary full-width" 
     @click="deleteStudent(item.id_student)"><strong>Delete</strong></button></td>
          </tr>
      </table>
  </div>
  </div>
</template>
<script>

// import StudentTable from '../components/StudentTable.vue';

export default {
  name: 'student',
  data() {
    return {
      collection: null,
      search: '',
    };
  },
  computed: {
    filterSearch: function() {
      return this.collection.filter( student => {
        return student.student_name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    getStudents: function () {
      http.get('/students').then(response => {
        this.collection = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteStudent: function (id) {
      http.delete('students/' + id).then(
        response => {
          console.log('success');
          this.getStudents();
        },
      );
    },
  },
  created() {
    this.getStudents();
  },
};
</script>
