<template>
  <div class="workshop">
  </div>
</template>
<script>

export default {
  name: 'WorkshopsTable',
  props: {
    collection: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">

  table {
    width: "100%";
    border-style: solid;
    border-witdh: 50px;
    border-color: black;
    margin : 0 auto;
    text-align: center;
    box-sizing: boder-box;
    border-collapse: collapse;
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
  .workshop-row {
    &:hover {
      cursor: pointer;
    }
  }
  .button {
    background-color: #4CAF50;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
