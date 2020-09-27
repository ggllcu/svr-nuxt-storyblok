<template>
  <div v-editable="blok" class="feature util__flex-eq">
    <img :src="resizedIcon" class="feature__icon">
    <h1>{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
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
  },
  computed: {
    resizedIcon () {
      if (typeof this.blok.icon !== 'undefined') {
        return null
        // return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return null
    }
  }
}
</script>
