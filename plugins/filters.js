import Vue from 'vue'
import marked from 'marked'

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

Vue.filter('dashify', function (value) {
  if (typeof value === 'undefined') {
    return 'undefined'
  }
  const dashified = value.toString()
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, '-')

  return 'blok-' + dashified
})

Vue.filter('markdown', (markdown) => {
  if (typeof markdown !== 'undefined') {
    return marked(markdown)
  }
  return null
})

Vue.filter('capitalize', function (value) {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
