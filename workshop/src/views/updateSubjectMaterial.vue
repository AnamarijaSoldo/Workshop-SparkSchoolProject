<template>
  <div class="updateSubjectMaterial" v-if="collection">
      <updateSubjectMaterial :collection = "collection"></updateSubjectMaterial>
  </div>
</template>

<script>

import updateSubjectMaterial from '../components/updateSubjectMaterial.vue';

export default {
  name: 'updateSubjectMaterial',
  components: {
    updateSubjectMaterial,
  },
  data() {
    return {
      collection: null,
    };
  },
};
</script>
