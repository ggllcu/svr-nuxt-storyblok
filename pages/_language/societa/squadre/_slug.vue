<template>
  <section>
    <div v-editable="story.content">
      <article class="article">
        <PageHeader
          :title="story.content.title"
          :subtitle="story.content.subtitle"
          :background-image="story.content.image.filename"
        />
        <!-- <Figure :image="story.content.image" /> -->
        <section class="row">
          <div class="article-content container content">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="body" />
          </div>
        </section>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/societa/squadre/${context.params.slug}`, {
      version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      // console.log('res.data', res.data)
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
  },
  methods: {
    transformImage (image, option) {
      if (!image) {
        return ''
      }
      if (!option) {
        return ''
      }

      const imageService = 'https://img2.storyblok.com/'
      const path = image.replace('https://a.storyblok.com/', '')
      return imageService + option + path
    },
    storyHasCarousel (story) {
      if (typeof story.content.carousel === 'undefined') {
        return false
      }

      if (Object.keys(story.content.carousel).length === 0) {
        return false
      }

      return true
    }
  }
}
</script>
