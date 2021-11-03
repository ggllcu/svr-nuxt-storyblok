<template>
  <figure class="image is-2by1">
    <img :src="image">
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
