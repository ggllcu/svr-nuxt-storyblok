import Vue from 'vue'

Vue.filter('transformImage', function (image, option) {
  if (!image) {
    return ''
  }
  if (!option) {
    return ''
  }

  const imageService = '//img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
})
