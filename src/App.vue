<template>
    <div id="app">
        <header class="header">
            <span class="header__logo">PodPah</span>
            <router-link class="header__link" to="/">Player</router-link>
            <router-link class="header__link" to="/busca">Buscar</router-link>
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
  margin-top: 1.5rem;
}
</style>
