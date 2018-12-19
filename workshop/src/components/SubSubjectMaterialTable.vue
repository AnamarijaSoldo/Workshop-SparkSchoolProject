u<template>
  <div class="subjectMaterial">
      <table class="table table-bordered table-dark">
          <tr>
              <th>Name</th>
              <th>Link</th>
          </tr>
          <tr v-for = "(item, index) in collection" :key="index" class="subjectMaterial-row"
           @click="$router.push('/subject/')">
              <td>{{item.name_materials}}</td>
              <td>{{item.link}}</td>
          </tr>
      </table>
  </div>
</template>
<script>

export default {
  name: 'SubjectMaterial',
  props: {
    collection: {
      type: Array,
      default() {
        return {
          items: [],
        };
      },
    },
  },
};
</script>

