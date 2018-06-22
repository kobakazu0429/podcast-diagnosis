<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
window.addEventListener('touchmove', function(event) {
  event.preventDefault();
});
export default {
  name: 'App'
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');
@import url('https://fonts.googleapis.com/earlyaccess/notosansjapanese.css');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');

html,
body,
#app {
  font-family: 'Noto Sans Japanese';
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
}

input,
button,
textarea,
select {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  appearance: none;
}
</style>
