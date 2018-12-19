<template>
  <div class="workshop">
       <table class="table table-bordered table-dark">
          <tr>
              <th>Name</th>
              <th>Cycle</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
              <th>Deleted</th>
              <th>Status</th>
          </tr>
          <tr v-for ="(item, index) in collection" :key="index" class ="instructorWorkshop-row"
          @click="$router.push('/instructor/')">
              <td>{{item.name_workshop}}</td>
              <td>{{item.cycle}}</td>
              <td>{{item.start_workshop}}</td>
              <td>{{item.end_workshop}}</td>
              <td>{{item.duration}}</td>
              <td>{{item.deleted}}</td>
              <td>{{item.status}}</td>
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

