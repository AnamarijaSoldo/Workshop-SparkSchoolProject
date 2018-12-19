<template>
    <div class="instructor">
       
    </div>
</template>

<script>

export default {
  name: 'InstructorsTable',
  props: {
    collection: {
      type: Array,
    },
  },
};
</script>

<style lang ="scss">
    table {
        width: "50%";
        border-style: solid;
        border-width: 5px;
        border-color: blue;
        margin: 0 auto;
        background-color: #F5F5DC;
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
  .instructor-row {
    &:hover {
      cursor: pointer;
    }
  }
  
</style>
