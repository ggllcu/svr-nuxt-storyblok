<template>
  <section>
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} }
    }
  },

  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
</script>
