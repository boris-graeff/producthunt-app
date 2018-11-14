<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~@/style/vars';
  @import '~@/style/reset.css';

  body {
    background: $background-color;
  }
</style>

<style lang="scss" scoped>
  @import '~@/style/vars';

  .app {
    width: 100%;
    max-width: $max-app-width;
    min-height: 100vh;
    margin: auto;
    color: $font-color;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  }
</style>
