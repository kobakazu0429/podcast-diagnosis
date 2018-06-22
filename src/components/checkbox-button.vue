<template>
  <div class="classWrapper">
    <div class="center">
      <h3>質問</h3>
    </div>
    <p>{{ group.text }}</p>
    <div class="center">
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
  margin-bottom: 100px;
}

p {
  margin-bottom: 100px;
  min-height: 50px;
}

.classWrapper {
  margin: 40px;
}

.buttonWrapper {
  margin: 0 -10px;
}

.center {
  text-align: center
}

.yes {
  background-color: #e0f3ff;
}

.no {
  background-color: #ffe0d5;
}

input[type='radio'] {
  display: none;
}

label {
  width: 50px;
  height: 20px;
  padding: 10px 40px;
  border: 1px solid #707070;
  border-radius: 10px;
  margin: 10px;
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
