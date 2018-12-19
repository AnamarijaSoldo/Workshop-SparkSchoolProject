<template>
    <div class ="student">
       <table class="table table-bordered table-dark">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Mail</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Deleted</th>
            </tr>
           <tr v-for = "(item, index) in collection" :key="index" class="student-row"
           @click="$router.push('/workshop/')">
              <td>{{item.student_name}}</td>
              <td>{{item.student_lastname}}</td>
              <td>{{item.mail}}</td>
              <td>{{item.comment}}</td>
              <td>{{item.status}}</td>
              <td>{{item.deleted}}</td>
          </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'StudentTable',
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

