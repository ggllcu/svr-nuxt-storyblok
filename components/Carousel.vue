<template>
  <div v-editable="blok">
    <b-carousel>
      <b-carousel-item v-for="(slide, i) in blok.slides" :key="i">
        <section class="hero is-large" :style="`background-image: url(${slide.image.filename})`">
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
