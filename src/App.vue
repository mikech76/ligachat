<template>
  <div id="app">
    <ChatRoom/>
  </div>
</template>

<script>
  import ChatRoom from '@/components/ChatRoom.vue'

  export default {
    name:       'App',
    components: {ChatRoom}
  }
  // <style lang="scss" src="./css/_null.scss"></style>
</script>

<style lang="scss">

  @import "./css/null";

  #app {
    height: 100%;

    .column {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
