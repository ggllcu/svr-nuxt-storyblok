<template>
  <section>
    <div v-editable="story.content">
      <article class="article">
        <PageHeader
          :title="story.content.title"
          :subtitle="story.content.subtitle"
          :background-image="story.content.image.filename"
        />
        <section class="row">
          <!-- <Figure :image="story.content.image" /> -->
          <div class="article-content container content">
            <!-- <Title :title="story.content.title" /> -->
            <Date v-if="story.content.date" :date="story.content.date" />
            <Date v-else :date="story.created_at" />
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
import { createSEOMeta } from '~/utils/seo'

export default {
  components: {
    PageHeader: () => import('@/components/PageHeader.vue'),
    Date: () => import('@/components/detail/Date.vue')
  },

  asyncData (context) {
    // Load the JSON from the API
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/${context.params.language}/news/${context.params.slug}`, {
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
  },
  head () {
    const url = this.story.full_slug
    // eslint-disable-next-line

    let title
    let description
    let ogImage

    if (this.story.content.metadata) {
      title = this.story.content.metadata.title
      description = this.story.content.metadata.description
      ogImage = this.story.content.metadata.og_image
    } else {
      title = this.story.content.title
      description = this.story.content.description
      ogImage = this.story.content.image.filename
    }

    console.log('this.story.full_slug', this.story.full_slug)

    return {
      title,
      meta: createSEOMeta({ title, description, image: ogImage, url })
    }
  }
}
</script>
