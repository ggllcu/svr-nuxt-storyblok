<template>
  <section>
    <h1 class="title is-2">
      Notizie
    </h1>
    <div class="row columns is-multiline">
      <div v-for="post in data.stories" :key="post.content._uid" class="column is-one-third">
        <nuxt-link :to="'/' + post.full_slug">
          <div class="card">
            <Figure :image="post.content.image" />
            <div class="card-content">
              <div class="content">
                <h2 class="title is-5">
                  {{ post.content.name }}
                </h2>
                <Date :date="post.published_at" />
              </div>
              <div class="content">
                {{ post.content.intro }}
                <br>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Date: () => import('@/components/Detail/Date.vue')
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/blog`,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  data () {
    return { total: 0, data: { stories: [] } }
  },
  methods: {
    transformImage (image, option) {
      if (!image) { return '' }
      if (!option) { return '' }

      const imageService = '//img2.storyblok.com/'
      const path = image.replace('//a.storyblok.com', '')
      return imageService + option + path
    }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  background: no-repeat center ;
  background-size: cover;
}
</style>
