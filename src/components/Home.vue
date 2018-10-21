<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <audio-player></audio-player>
  </div>
</template>

<script>
import AudioPlayer from './Player/AudioPlayer.vue';
export default {
  name: 'home',
  components:{
    'audio-player': AudioPlayer,
  },
  data () {
    return {
      msg: '',
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
