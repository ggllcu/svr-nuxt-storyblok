<template>
  <section>
    <div v-editable="story.content">
      <article>
        <figure>
          <img :src="story.content.image">
        </figure>
        <main>
          <div class="article-content">
            <Title :title="story.content.name" />
            <time>
              <p class="has-text-dark">
                {{ new Date(story.published_at).getDate() }}/
                {{ new Date(story.published_at).getMonth() + 1 }}/
                {{ new Date(story.published_at).getFullYear() }}
              </p>
            </time>
            <div>
              {{ body }}
            </div>
          </div>
        </main>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  margin: 1.25rem;
  padding: 1.25rem;
  margin-top: -100px;
  background-color: #fff;
}
time p {
  margin-bottom: 1.5rem;
}
</style>

<script>
import marked from 'marked'

export default {
  components: {
    Title: () => import('@/components/Detail/Title.vue')
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
  },
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
  }
}
</script>
