<template>
  <div class="AddWorkshop" v-if="collection">
      <AddWorkshop :collection = "collection"></AddWorkshop>
  </div>
</template>

<script>

import AddWorkshop from '../components/AddWorkshop.vue';

export default {
  name: 'AddWorkshop',
  components: {
    AddWorkshop,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
