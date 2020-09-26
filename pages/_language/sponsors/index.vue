<template>
  <section>
    <h1 class="title is-2">
      Main Sponsor
    </h1>
    <div class="columns is-multiline">
      <div v-for="post in data.stories" :key="post.content._uid" class="column is-one-third">
        <nuxt-link :to="'/' + post.full_slug">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3" :style="`background-image: url(${ transformImage(post.content.image, '368x276') })`" />
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-5">
                    {{ post.content.name }}
                  </h2>
                </div>
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
    <MainSponsor />
  </section>
</template>

<script>
export default {
  components: {
    MainSponsor: () => import('@/components/Sponsors/MainSponsor')
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/sponsors`,
      // cv: context.store.state.cacheVersion,
      filter_query: {
        categories: {
          in_array: '4349dbde-514f-4d7d-93dd-8c9d053f2cc3'
        }
      }
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
