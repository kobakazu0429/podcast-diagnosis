<template>
  <div>
    <label for="class_b_1">class_b_1
      <input
        id="class_b_1"
        :checked="this.$store.state.class_b_1"
        type="checkbox"
        name="class_b_1"
        @change="updateChecked('class_b_1', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_b_2">class_b_2
      <input
        id="class_b_2"
        :checked="this.$store.state.class_b_2"
        type="checkbox"
        name="class_b_2"
        @change="updateChecked('class_b_2', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_b_3">class_b_3
      <input
        id="class_b_3"
        :checked="this.$store.state.class_b_3"
        type="checkbox"
        name="class_b_3"
        @change="updateChecked('class_b_3', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_b_4">class_b_4
      <input
        id="class_b_4"
        :checked="this.$store.state.class_b_4"
        type="checkbox"
        name="class_b_4"
        @change="updateChecked('class_b_4', $event.target.checked)"
      >
    </label>

    <br>

    <label for="class_b_5">class_b_5
      <input
        id="class_b_5"
        :checked="this.$store.state.class_b_5"
        type="checkbox"
        name="class_b_5"
        @change="updateChecked('class_b_5', $event.target.checked)"
      >
    </label>

    <br>

    <router-link to="/class_a">Go to class_a</router-link>
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
