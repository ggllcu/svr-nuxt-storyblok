<template>
  <section>
    <div v-editable="story.content">
      <h1 class="title is-2">
        {{ story.content.name }}
      </h1>
      <figure>
        <img :src="story.content.image">
      </figure>
      <div>
        {{ body }}
      </div>
      <hr>
      <h2 class="title is-5">
        Siamo a sostegno perché:
      </h2>
      <div>
        {{ reason }}
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  asyncData (context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/sponsors/${context.params.slug}`, {
      version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  data () {
    return {
      story: { content: { body: '', reason: '' } }
    }
  },
  computed: {
    body () {
      return marked(this.story.content.body)
    },
    reason () {
      return marked(this.story.content.reason)
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

<style lang="scss">
</style>
