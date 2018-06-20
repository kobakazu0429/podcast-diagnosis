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
      <div class="descriptionWrapper">
        <span class="box-title">説明</span>
        <p>A : 有名人系</p>
        <p>B : 情報系</p>
        <p>C : 講座・教室系</p>
        <p>D : ゲスト系</p>
        <p>E : 雑談系</p>
        <p>F : ボイスコンテンツ・朗読</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  watch: {
    '$route' () {
      this.countClass();
      this.$store.commit('countClass', this.countClass());
    }
  },
  mounted() {
    this.countClass();
  },
  methods: {
    countClass() {
      let tmp_arr = [];
      for (let i = 0; i < 6; i++) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if(this.$store.state.class[i][j].boolean == 'true') {
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
</style>
