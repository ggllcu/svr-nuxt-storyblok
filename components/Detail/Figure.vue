<template>
  <figure class="image is-4by3">
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
