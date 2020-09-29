<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'POPPINS';
  src: url('./assets/Poppins-Regular.ttf');
}
@font-face {
  font-family: 'Lato';
  src: url('./assets/lato/Lato-Regular.ttf');
}
* {
  font-family: 'POPPINS';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
.color-default {
  color: #2395FF;
}
.color-second {
  color:#6B6B6B;
}
.color-third {
  color:#595959;
}
.font-size-12 {
  font-size: 12px;
}
</style>
