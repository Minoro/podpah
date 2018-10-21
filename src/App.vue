<template>
  <div id="app">
    <header>
      <span>PodPah</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-color;
  font-size: 1.6rem;
}

main {
  text-align: center;
  margin-top: 4rem;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 1.5rem 0 2rem;
  background-color: $primary-color;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 1.5rem;
}
</style>
