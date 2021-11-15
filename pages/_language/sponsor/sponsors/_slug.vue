<template>
  <section>
    <div v-editable="story.content">
      <article>
        <PageHeader
          :title="story.content.title"
          :subtitle="story.content.subtitle"
          :background-image="story.content.image.filename"
        />
        <section class="row">
          <div class="article-content container content">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="body" />
            <hr>
            <h2 v-if="reason.length > 0" class="title is-4">
              Siamo a sostegno perché:
            </h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-if="reason.length > 0" v-html="reason" />
            <hr v-if="reason.length > 0">

            <b-button
              v-if="story.content.website.url.length > 0"
              tag="a"
              type="is-primary"
              :href="story.content.website.url"
              target="_blank"
            >
              Visita il sito
            </b-button>
          </div>
        </section>
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
    PageHeader: () => import('@/components/PageHeader.vue')
  },
  asyncData (context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/sponsor/sponsors/${context.params.slug}`, {
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
      story: {
        content: {
          body: '',
          reason: ''
        }
      }
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
