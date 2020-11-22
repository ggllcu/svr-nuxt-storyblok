<template>
  <section>
    <h1 class="title is-2">
      Sponsors
    </h1>
    <div class="row columns is-multiline">
      <div v-for="post in data.stories" :key="post.content._uid" class="column is-one-third">
        <nuxt-link :to="'/' + post.full_slug">
          <div class="card">
            <Figure :image="post.content.logo" />
            <div class="card-content">
              <div class="content">
                <h2 class="title is-5">
                  {{ post.content.name }}
                </h2>
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
    Figure: () => import('@/components/List/Figure_Contain.vue')
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/sponsor/sponsors`,
      categories: {
        in_array: '4349dbde-514f-4d7d-93dd-8c9d053f2cc3'
      }
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  data () {
    return { total: 0, data: { stories: [] } }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  background: no-repeat center ;
  background-size: contain;
}
</style>
