<template>
  <div class="updateSubject" v-if="collection">
      <updateSubject :collection = "collection"></updateSubject>
  </div>
</template>

<script>

import updateSubject from '../components/updateSubject.vue';

export default {
  name: 'updateSubject',
  components: {
    updateSubject,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
