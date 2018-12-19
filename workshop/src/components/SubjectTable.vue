<template>
  <div class ="subject">
  </div>
</template>

<script>
export default {
  name: 'SubjectTable',
  props: {
    collection: {
      type: Array,
    },
  },
};
</script>


<style lang ="scss">
    table {
        width: "100%";
        border-style: solid;
        border-width: 2px;
        border-color: blue;
        margin: 0 auto;
        border-sizing: border-box;
    }
   th {
    padding : 5px;
    background-color: #00BFFF;
  }
  td {
    border : 5px;
    padding: 5px;
     background-color: #87CEEB ;
  }
  .subject-row {
    &:hover {
      cursor: pointer;
    }
  }
</style>
