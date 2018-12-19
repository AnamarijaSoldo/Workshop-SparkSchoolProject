<template>
    <div class="instructor">
        <table class="table table-bordered table-dark">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Mail</th>
                <th>Residence</th>
                <th>Accession date</th>
                <th>Withdrawal date</th>
                <th>Status</th>
                <th>Deleted</th>
            </tr>
           <tr v-for = "(item, index) in collection" :key="index" class="instructor-row"
           @click="$router.push('/workshop/')">
              <td>{{item.name}}</td>
              <td>{{item.lastname}}</td>
              <td>{{item.mail}}</td>
              <td>{{item.residence}}</td>
              <td>{{item.accession_date}}</td>
              <td>{{item.withdrawal_date}}</td>
              <td>{{item.status}}</td>
              <td>{{item.deleted}}</td>
          </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'WorkshopInstructorsTable',
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
