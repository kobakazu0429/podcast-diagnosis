<template>
  <div>
    <checkbox-button
      :group="this.$store.state.class[this.$route.params.class][this.$route.params.id]"
      :next-page-arr="this.$store.state.nextPage"/>

    <br>

    <router-link :to="{params : {class: this.$store.state.previousPage[0], id: this.$store.state.previousPage[1]}}">前へ</router-link>

    <br>

    <router-link :to="{params : {class: this.$store.state.nextPage[0], id: this.$store.state.nextPage[1]}}">次へ</router-link>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' () {
      this.$store.commit('nextPageURL', this.getNextPageURL());
      this.$store.commit('previousPageURL', this.getPreviousPageURL());
    }
  },
  methods: {
    getNextPageURL() {
      if (this.$route.params.id < 5) {
        return [this.$route.params.class, Number(this.$route.params.id) + 1];
      } else {
        switch (this.$route.params.class) {
        case 'a':
          return ['b', 1];
        case 'b':
          return ['c', 1];
        case 'c':
          return ['d', 1];
        case 'd':
          return ['e', 1];
        case 'e':
          return ['f', 1];
        case 'f':
          return ['g', 1];
        default:
          break;
        }
      }
    },
    getPreviousPageURL() {
      if (this.$route.params.id === 1) {
        switch (this.$route.params.class) {
        case 'a':
          return ['a', 1];
        case 'b':
          return ['a', 5];
        case 'c':
          return ['b', 5];
        case 'd':
          return ['c', 5];
        case 'e':
          return ['d', 5];
        case 'f':
          return ['e', 5];
        default:
          break;
        }
      } else {
        return [this.$route.params.class, Number(this.$route.params.id) - 1];
      }
    }
  }
};
</script>

<style scoped>
</style>
