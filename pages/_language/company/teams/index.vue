<template>
  <section>
    <div class="row columns is-multiline">
      <div :key="post.content._uid" v-for="post in data.stories" class="column is-one-third is-half-tablet">
        <nuxt-link :to="'/' + post.full_slug">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3" :style="`background-image: url(${post.content.image})`">
              </figure>
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
  </section>
</template>

<script>
export default {
  data () {
    return { total: 0, data: { stories: [] } }
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/company/teams`,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="scss">
figure.image {
  background: no-repeat center ;
  background-size: cover;
}
</style>
