<template>
  <section>
    <PageHeader
      title="Notizie"
    />
    <div class="row columns is-multiline">
      <div v-for="post in data.stories" :key="post._uid" class="column is-one-third">
        <nuxt-link :to="'/' + post.full_slug">
          <div class="card">
            <FigureCover :image="post.content.image.filename" />
            <div class="card-content">
              <div class="content">
                <h2 class="title is-5">
                  {{ post.content.title }}
                </h2>
                <Date v-if="post.content.date" :date="post.content.date" />
                <Date v-else :date="post.created_at" />
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
    Date: () => import('@/components/detail/Date.vue'),
    FigureCover: () => import('@/components/List/Figure_Cover.vue')
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/news`,
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
