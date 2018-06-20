<template>
  <div>
    <h1>Podcast診断メーカー</h1>
    <h3>- あなたのPodcast適性を可視化しよう -</h3>
    <div class="nameWrapper">
      <h3>名前を入力してください</h3>
      <input
        type="text"
        placeholder="名無し"
        @change="setName($event.target.value)"
      >
    </div>

    <router-link
      to="/class/0/0"
      class="square_btn"
    >
      診断する
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    setName(name) {
      this.$store.commit('setName', name);
    }
  }
};
</script>


<style scoped>
div {
  text-align: center;
}

h1 {
  font-size: 9vw;
  margin-top: 50px;
}

h3 {
  font-size: 4vw;
  margin-top: 30px;
}

input {
  border: 0;
  padding: 10px;
  font-size: 1em;
  color: #aaa;
  /* outline: 0; */
  border: solid 1px #aaa;
  margin: 0 0 20px;
  width: 160px;
  height: 20px;
  border-radius: 3px;
}

input:focus {
  outline-color: #67c5ff;
  outline-width: 3px;
}

a {
  text-decoration: none;
  color: #000;
}

a:visited {
  color: black;
}

.square_btn {
  text-align: center;
  vertical-align: middle;
  margin: 150px 0;
  display: inline-block;
  padding: 10px 80px;
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
