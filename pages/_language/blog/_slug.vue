<template>
  <section>
    <div v-editable="story.content">
      <article class="article">
        <header
          class="hero is-bold has-text-centered is-medium is-primary"
          :style="{
            'background-image': `url(${story.content.image})`,
          }"
        >
          <div class="hero-body">
            <h1 class="title is-2 mb-0 pb-2">
              {{ story.content.title }}
            </h1>
            <h2 class="title is-3 pt-0">
              {{ story.content.subtitle }}
            </h2>
          </div>
        </header>
        <!-- <Figure :image="story.content.image" /> -->
        <div class="article-content">
          <!-- <Title :title="story.content.title" /> -->
          <Date v-if="story.content.date" :date="story.content.date" />
          <Date v-else :date="story.created_at" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="body" />
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
time p {
  margin-bottom: 1.5rem;
}
.hero {
  margin: -0.75rem;

  @media screen and (min-width: 769px) {
    margin: -0.75rem;
  }

  margin-bottom: 0;
  background-position: center;
  background-size: cover;

  .hero-body {
    padding-left: 0;
    padding-right: 0;

    .title {
      background-color: #000000b0;
      padding: 0.75rem 0;
    }
  }
}
</style>

<script>
import marked from 'marked'

export default {
  layout: 'detail',

  components: {
    // Title: () => import('@/components/content/_Title.vue'),
    // Figure: () => import('@/components/detail/Figure.vue'),
    Date: () => import('@/components/detail/Date.vue')
  },

  asyncData (context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/blog/${context.params.slug}`, {
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
