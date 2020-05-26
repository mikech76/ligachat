<template>
  <div class="avatar">
    <img alt="" class="avatar__logo" :src="url">
  </div>
</template>

<script>
  export default {
    name:  'Avatar',
    props: {
      url: String,
    },
  }
</script>

<style lang="scss" src="@/components/messenger/css/_avatar.scss"></style>
