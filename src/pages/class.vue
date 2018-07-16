<template>
  <div>
    <div class="wrapper">
      <checkbox-button
        :group="this.$store.state.class[this.$route.params.class][this.$route.params.id]"
        :next-page-arr="this.$store.state.nextPage"/>

      <div class="center">
        <router-link
          :to="{params : {class: this.$store.state.previousPage[0], id: this.$store.state.previousPage[1]}}"
          class="arrow-left square_btn"
        >
          <i class="fas fa-angle-left"/>
          前へ
        </router-link>

        <router-link
          :to="{params : {class: this.$store.state.nextPage[0], id: this.$store.state.nextPage[1]}}"
          class="arrow-right square_btn"
        >
          次へ
          <i class="fas fa-angle-right"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.commit('nextPageURL', this.getNextPageURL());
      this.$store.commit('previousPageURL', this.getPreviousPageURL());
    }
  },
  methods: {
    getNextPageURL() {
      if (Number(this.$route.params.id) < 4) {
        return [Number(this.$route.params.class), Number(this.$route.params.id) + 1];
      } else {
        switch (Number(this.$route.params.class)) {
          case 0:
            return [1, 0];
          case 1:
            return [2, 0];
          case 2:
            return [3, 0];
          case 3:
            return [4, 0];
          case 4:
            return [5, 0];
          case 5:
            return [6, 0];
          default:
            break;
        }
      }
    },
    getPreviousPageURL() {
      if (Number(this.$route.params.id) === 0) {
        switch (Number(this.$route.params.class)) {
          case 0:
            return [0, 0];
          case 1:
            return [0, 4];
          case 2:
            return [1, 4];
          case 3:
            return [2, 4];
          case 4:
            return [3, 4];
          case 5:
            return [4, 4];
          case 6:
            return [5, 4];
          default:
            break;
        }
      } else {
        return [Number(this.$route.params.class), Number(this.$route.params.id) - 1];
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 50px;
}

.center {
  text-align: center;
}

a {
  text-decoration: none;
  color: #000;
  margin: 0 20px;
  text-align: center;
  vertical-align: middle;
}

a:visited {
  color: black;
}

.square_btn {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}

.square_btn:hover {
  background: #67c5ff;
  color: white;
}
</style>
