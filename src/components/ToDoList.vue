<template>
  <div class="hello">
    <input type="text" v-model="example">
  </div>
</template>

<script>

export default {
  name: "ToDoList",
  data() {
    return {
      example: 'dat',
    };
  },
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
