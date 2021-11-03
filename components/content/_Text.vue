<template>
  <div v-editable="blok">
    <div
      class="content"
      v-html="$options.filters.markdown(blok.text)"
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
