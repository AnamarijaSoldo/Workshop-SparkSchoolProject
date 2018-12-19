<template>
  <div class="AddSubjectMaterial" v-if="collection">
      <AddSubjectMaterial :collection = "collection"></AddSubjectMaterial>
  </div>
</template>

<script>

import AddSubjectMaterial from '../components/AddSubjectMaterial.vue';

export default {
  name: 'AddSubjectMaterial',
  components: {
    AddSubjectMaterial,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
