<template>
  <section class="about">
    <PageHeader
      :title="story.content.title"
      :subtitle="story.content.subtitle"
      :background-image="story.content.image.filename"
    />
    <section class="row">
      <!-- Component for page content -->
      <component
        :is="blok.component | dashify"
        v-for="blok in story.content.body"
        :key="blok._uid"
        :blok="blok"
      />
    </section>
  </section>
</template>

<script>
export default {
  components: {
    PageHeader: () => import('@/components/PageHeader.vue')
  },
  asyncData (context) {
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get(`cdn/stories/${context.params.language}/societa/chi-siamo`, {
        version
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
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
