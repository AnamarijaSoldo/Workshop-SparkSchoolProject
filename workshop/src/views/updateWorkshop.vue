<template>
  <div class="updateWorkshop" v-if="collection">
      <updateWorkshop :collection = "collection"></updateWorkshop>
  </div>
</template>

<script>

import updateWorkshop from '../components/updateWorkshop.vue';

export default {
  name: 'updateWorkshop',
  components: {
    updateWorkshop,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
