<template>
  <b-image
    :src="transformImage( blok.image.filename, 'fit-in/750x0/' )"
    alt="A random image"
  />
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  methods: {
    transformImage (image, option) {
      if (!image) { return '' }
      if (!option) { return '' }

      const imageService = 'https://img2.storyblok.com/'
      const path = image.replace('https://a.storyblok.com/', '')
      return imageService + option + path
    }
  }
}
</script>
