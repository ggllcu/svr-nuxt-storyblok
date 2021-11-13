<template>
  <div class="card-image">
    <figure class="image is-3by2" :style="`background-image: url('${ transformImage(image, '368x276') }')`" />
    <!-- <figure class="image is-3by2" :style="`background-image: url('${ transformImage(image, 'fit-in/368x276/filters:fill(transparent)') }')`" /> -->
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: null
    }
  },
  methods: {
    transformImage (image, option) {
      if (!image) { return '' }
      if (!option) { return '' }

      return image + '/m/' + option
    }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  background: no-repeat center ;
  background-size: cover;
}
</style>
