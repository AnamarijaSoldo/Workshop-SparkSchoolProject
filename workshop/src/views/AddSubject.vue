<template>
  <div class="AddSubject" v-if="collection">
      <AddSubject :collection = "collection"></AddSubject>
  </div>
</template>

<script>

import AddSubject from '../components/AddSubject.vue';

export default {
  name: 'AddSubject',
  components: {
    AddSubject,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
