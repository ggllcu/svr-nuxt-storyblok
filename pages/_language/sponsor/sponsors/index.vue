<template>
  <section>
    <h1 class="title is-2">
      Main Sponsors
    </h1>
    <div class="row columns is-multiline">
      <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
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
      filter_query: {
        categories: {
          in_array: 'bad5ac0d-4846-48be-b653-6d2cd0df2b88'
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
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  background: no-repeat center ;
  background-size: contain;
}
</style>
