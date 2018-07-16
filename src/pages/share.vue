<template>
  <div>
    <div class="wrapper">
      <div class="nameWrapper">
        <h3><span>{{ this.$route.params.name }}</span>さんのPodcast適性診断結果</h3>
      </div>
      <div id="chartWrapper">
        <radar-chart
          :width="300"
          :height="300"
          :result_data="result"
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
      <a
        :href="'https://twitter.com/intent/tweet?via=cho_kure&hashtags=ちょっくれ&text=私のPodcast診断結果です。%0dもしかしてちょっくれに出演した方がいいかも？%0d結果はココから : &url='+returnLink()"
        target="_blank"
        class="square_btn">
        ツイート
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      result: []
    };
  },
  mounted() {
    this.retrunResult(this.$route.params.result);
    console.log(this.$router.currentRoute.fullPath);
    console.log(this.returnLink());
  },
  methods: {
    returnLink() {
      return encodeURIComponent(
        'https://kobakazu0429.github.io/podcast-diagnosis/%23' + this.$router.currentRoute.fullPath
      );
    },
    retrunResult(hex) {
      let dec = String(parseInt(hex, 16));
      if (dec.length < 6) dec = '000000' + dec;
      dec = dec.slice(-6);
      let a = dec.slice(0, 1);
      let b = dec.slice(1, 2);
      let c = dec.slice(2, 3);
      let d = dec.slice(3, 4);
      let e = dec.slice(4, 5);
      let f = dec.slice(5, 6);
      this.result = [a, b, c, d, e, f];
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
