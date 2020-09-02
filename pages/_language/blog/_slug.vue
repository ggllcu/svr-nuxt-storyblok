<template>
  <section>
    <div v-editable="story.content">
      <h1 class="title is-2">{{ story.content.name }}</h1>
      <time>
        <p class="has-text-dark">
          {{ new Date(story.published_at).getDate() }}/
          {{ new Date(story.published_at).getMonth() + 1 }}/
          {{ new Date(story.published_at).getFullYear() }}
        </p>
      </time>
      <figure>
        <img :src="story.content.image">
      </figure>
      <div v-html="body">
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      story: { content: { body: '' } }
    }
  },
  computed: {
    body () {
      return marked(this.story.content.body)
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
  },
  asyncData (context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/blog/${context.params.slug}`, {
      version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="scss" scoped>
time p {
  margin-bottom: 1.5rem;
}
</style>
