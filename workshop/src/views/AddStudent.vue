<template>
  <div class="AddStudent" v-if="collection">
      <AddStudent :collection = "collection"></AddStudent>
  </div>
</template>

<script>

import AddStudent from '../components/AddInAddStudentstructor.vue';

export default {
  name: 'AddStudent',
  components: {
    AddStudent,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
