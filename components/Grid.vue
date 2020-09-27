<template>
  <div v-editable="blok">
    <component :is="blok.component" v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
