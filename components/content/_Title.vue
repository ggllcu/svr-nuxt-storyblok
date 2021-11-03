<template>
  <h2 v-editable="blok" class="title is-2">
    {{ blok.title }}
  </h2>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
