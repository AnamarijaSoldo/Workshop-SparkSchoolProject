<template>
   <div class="subjectMaterial px-4" v-if="collection">
  <div class="d-flex justify-content-between my-4">
  <input type="text"  placeholder="Search.." name="search" class="w-25" v-model="search"> 
    <button type="box" class="btn btn-black btn-primary w-25"
     @click="$router.push('/addSubjectMaterial')"><strong>Add</strong></button>
     </div>
       <table class="table table-bordered table-dark" align="center">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Id(subject)</th>
                <th>Link</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
           <tr v-for ="(item, index) in filterSearch" :key="index" class="subjectMaterial-row">
             <td class="bg-primary">{{item.id_subjects_materials}}</td>
              <td>{{item.name_materials}}</td>
               <td>{{item.id_subjects}}</td>
              <td>{{item.link}}</td>
              <td @click="$router.push('/subjectMaterial/' + item.id_subjects_materials + '/subject')">subject</td>
              <td><button type="box" class="btn btn-large btn-black btn-primary full-width" 
     @click="$router.push('/updateSubjectMaterial/' + item.id_subjects_materials)"><strong>Update</strong></button></td>
             <td><button type="box" class="btn btn-large btn-black btn-primary full-width"
     @click="deleteSubjectMaterial(item.id_subjects_materials)"><strong>Delete</strong></button></td>
          </tr>
      </table>
  </div>
  </div>
</template>
<script>
// import SubjectMaterial from '../components/SubjectMaterial.vue';

export default {
  name: 'subjectMaterial',
  data() {
    return {
      collection: null,
      search: '',
    };
  },
  computed: {
    filterSearch: function() {
      return this.collection.filter( subjectMaterial => {
        return subjectMaterial.name_materials.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    getSubjectMaterials: function () {
      http.get('/subjectMaterials').then(response => {
         this.collection = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteSubjectMaterial: function (id) {
      http.delete('subjectMaterials/' + id).then(
        response => {
          console.log('success');
          this.getSubjectMaterials();
        },
      );
    },
  },
  created() {
    this.getSubjectMaterials();
  },
};
</script>
