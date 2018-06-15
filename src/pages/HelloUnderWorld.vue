<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Under Ground'
    };
  }
};
</script>

<style scoped>
.hello {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
