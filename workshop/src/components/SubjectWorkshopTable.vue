<template>
  <div class="subjectWorkshop">
       <table class="table table-bordered table-dark">
          <tr>
              <th>Name</th>
          </tr>
          <tr v-for ="(item, index) in collection" :key="index" class ="subjectWorkshop-row"
           @click="$router.push('/subject/')">
              <td>{{item.name_workshop}}</td>
          </tr>
      </table>
  </div>
</template>
<script>


export default {
  name: 'WorkshopsTable',
  props: {
    collection: {
      type: Array,
      default() {
        return {
          items: [],
        };
      },
    },
  },
};
</script>

