<template>
  <div class="updateStudent" v-if="collection">
      <updateStudent :collection = "collection"></updateStudent>
  </div>
</template>

<script>

import updateStudent from '../components/updateStudent.vue';

export default {
  name: 'updateStudent',
  components: {
    updateStudent,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
