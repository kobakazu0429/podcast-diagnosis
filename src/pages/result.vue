<template>
  <div>
    <div class="wrapper">
      <div class="nameWrapper">
        <h3><span>{{ this.$store.state.name }}</span>さんのPodcast適性診断結果</h3>
      </div>
      <div id="chartWrapper">
        <radar-chart
          :width="300"
          :height="300"
          :result_data="this.$store.state.result_data"
        />
      </div>
      <router-link
        :to="'/share/' + this.$store.state.name + '/' + query_r"
        class="square_btn"
      >
        簡単な説明を見る / Twitterでシェアする
      </router-link>
      <a
        href="https://booth.pm/ja/items/828339"
        class="square_btn">
        「今日からはじめる技術Podcast 完全入門[PDF版]」の購入はこちらから
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      query_r: []
    };
  },
  watch: {
    $route() {
      this.countClass();
      this.$store.commit('countClass', this.countClass());
    }
  },
  mounted() {
    this.countClass();
    this.createQuery_R(this.$store.state.result_data);
  },
  methods: {
    createQuery_R(result) {
      let hoge = '';
      hoge += result[0];
      hoge += result[1];
      hoge += result[2];
      hoge += result[3];
      hoge += result[4];
      hoge += result[5];
      this.query_r = Number(hoge).toString(16);
      this.$store.commit(
        'setShareUrl',
        'https://kobakazu0429.github.io/podcast-diagnosis/#/share/' + this.$store.state.name + '/' + this.query_r
      );
    },
    countClass() {
      let tmp_arr = [];
      for (let i = 0; i < 6; i++) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if (this.$store.state.class[i][j].boolean == 'true') {
            count++;
          }
        }
        tmp_arr.push(count);
      }
      this.$store.commit('countClass', tmp_arr);
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}

.nameWrapper {
  width: 80%;
  text-align: center;
  margin: -10px auto 0 auto;
  background: linear-gradient(transparent 90%, #a7d6ff 70%);
}

.descriptionWrapper {
  width: 80%;
  position: relative;
  margin: 0 auto;
  padding: 0.5em 1em;
  border: solid 3px #95ccff;
  border-radius: 8px;
}

.descriptionWrapper .box-title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #fff;
  color: #95ccff;
  font-weight: bold;
}

.descriptionWrapper p {
  text-align: left;
  margin: 0;
  padding: 0;
}

#chartWrapper {
  width: 300px;
  margin: 0 auto 25px auto;
}

span {
  font-size: 5vw;
  margin-right: 5px;
}

h3 {
  font-size: 4vw;
}

.square_btn {
  text-align: center;
  vertical-align: middle;
  margin: 10px auto;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #000;
  border: solid 3px #95ccff;
  border-radius: 8px;
  transition: 0.4s;
  width: 80%;
}

.square_btn:hover {
  background: #67c5ff;
  color: white;
}
</style>
