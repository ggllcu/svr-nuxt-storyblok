<template>
  <section>
    <div v-editable="blok">
      <component :is="blok.component" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </section>
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
