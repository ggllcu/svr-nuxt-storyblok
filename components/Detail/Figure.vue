<template>
  <figure>
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
