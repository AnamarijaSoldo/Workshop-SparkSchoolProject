<template>
  <div class="updateInstructor" v-if="collection">
      <updateInstructor :collection = "collection"></updateInstructor>
  </div>
</template>

<script>

import updateInstructor from '../components/updateInstructor.vue';

export default {
  name: 'updateInstructor',
  components: {
    updateInstructor,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
