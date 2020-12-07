<template>
  <h1 class="title is-2">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
