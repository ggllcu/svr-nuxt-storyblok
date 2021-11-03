<template>
  <section v-editable="blok" class="container">
    <div class="columns">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </section>
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
