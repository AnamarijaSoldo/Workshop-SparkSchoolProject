<template>
    <div class ="student">
      
    </div>
</template>

<script>
export default {
  name: 'StudentTable',
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
  .student-row {
   &:hover {
     cursor: pointer;
   }
 }
.button{
  display: block;
  margin : 0 auto;
  position:  right;
  width: 300px;
  height:300px;
  box-align: center;
 }
</style>
