<template>
  <div class="classWrapper">
    <h3>質問</h3>
    <p>{{ group.text }}</p>
    <div class="buttonWrapper">
      <input
        id="yes"
        name="toggle"
        type="radio"
        value="true"
        @change="updateChecked(group.dir1, group.dir2, $event.target.value)"
        @click="moveNextPage(nextPageArr)"
      >
      <label
        for="yes"
        class="yes"
      >Yes</label>

      <input
        id="no"
        name="toggle"
        type="radio"
        value="false"
        @change="updateChecked(group.dir1, group.dir2, $event.target.value)"
        @click="moveNextPage(nextPageArr)"
      >
      <label
        for="no"
        class="no"
      >No</label>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    },
    nextPageArr: {
      type: Array,
      required: true
    }
  },
  watch: {
    '$route' () {
      document.getElementById('yes').checked = false;
      document.getElementById('no').checked = false;
    }
  },
  methods: {
    updateChecked(dir1, dir2, value) {
      this.$store.commit('updateChecked', { dir1: dir1, dir2: dir2, value: value });
    },
    moveNextPage(arr) {
      this.$router.push('/class/' + arr[0] + '/' + arr[1]);
    }
  }
};
</script>

<style scoped>
h3 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 80px;
}

p {
  margin-bottom: 80px;
  min-height: 50px;
  display: inline-block;
  text-align: left
}

.classWrapper {
  margin: 0 40px 100px 40px;
  text-align: center
}

.buttonWrapper {
  margin: -10px 0;
}

.yes {
  background-color: #e0f3ff;
  margin-right: 5px;
}

.no {
  background-color: #ffe0d5;
  margin-left: 5px;
}

input[type='radio'] {
  display: none;
}

label {
  width: 10vw;
  height: 5vw;
  padding: 10px 40px;
  border: 1px solid #707070;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}

input[type='radio']:checked + label {
  background-color: darkblue;
  cursor: default;
  color: #e6e6e6;
}
</style>
