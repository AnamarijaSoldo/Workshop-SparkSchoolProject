<template>
  <div class="addInstructor" v-if="collection">
      <AddInstructor :collection = "collection"></AddInstructor>
  </div>
</template>

<script>

import AddInstructor from '../components/AddInstructor.vue';

export default {
  name: 'addInstructor',
  components: {
    AddInstructor,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
