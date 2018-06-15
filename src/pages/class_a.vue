<template>
  <div>
    <label for="class_a_1">class_a_1
      <input
        id="class_a_1"
        :checked="this.$store.state.class_a_1"
        type="checkbox"
        name="class_a_1"
        @change="updateChecked('class_a_1', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_a_2">class_a_2
      <input
        id="class_a_2"
        :checked="this.$store.state.class_a_2"
        type="checkbox"
        name="class_a_2"
        @change="updateChecked('class_a_2', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_a_3">class_a_3
      <input
        id="class_a_3"
        :checked="this.$store.state.class_a_3"
        type="checkbox"
        name="class_a_3"
        @change="updateChecked('class_a_3', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_a_4">class_a_4
      <input
        id="class_a_4"
        :checked="this.$store.state.class_a_4"
        type="checkbox"
        name="class_a_4"
        @change="updateChecked('class_a_4', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_a_5">class_a_5
      <input
        id="class_a_5"
        :checked="this.$store.state.class_a_5"
        type="checkbox"
        name="class_a_5"
        @change="updateChecked('class_a_5', $event.target.checked)"
      >
    </label>

    <br>

    <router-link to="/class_b">Go to class_b</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    updateChecked(key, value) {
      this.$store.commit('updateChecked', { key: key, value: value });
    }
  }
};
</script>

<style scoped>
</style>
