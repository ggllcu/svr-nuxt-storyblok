<template>
  <div v-editable="blok">
    <b-carousel>
      <b-carousel-item v-for="(slide, i) in blok.slides" :key="i">
        <section class="hero is-large" :style="`background-image: url(${ transformImage( slide.image.filename, '800x0') })`">
          <div class="hero-body has-text-centered" />
        </section>
      </b-carousel-item>
    </b-carousel>
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
  methods: {
    transformImage (image, option) {
      if (!image) { return '' }
      /* if (!option) { return '' } */

      const imageService = '//img2.storyblok.com/'
      const path = image.replace('https://a.storyblok.com', '')
      /* return imageService + option + path */
      return imageService + option + '/filters:format(jpg)' + path
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 300px;
  background: no-repeat center;
  background-size: cover;
}
</style>
