<template>
  <div v-editable="blok" class="column">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.column"
      :key="blok._uid"
      :blok="blok"
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
