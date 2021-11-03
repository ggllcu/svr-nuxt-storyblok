<template>
  <div v-editable="blok">
    <div
      class="content"
      v-html="blok.html"
    />
  </div>
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
