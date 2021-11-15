<template>
  <div>
    <PageHeader
      title="I nostri sostenitori"
    />
    <section class="row">
      <main class="container">
        <h2 class="title is-2">
          Main Sponsors
        </h2>
        <div class="row columns is-multiline">
          <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
            <SponsorCard
              :url="'/' + post.full_slug"
              :website="post.content.website.url"
              :image="post.content.logo.filename"
              :title="post.content.title"
              :intro="post.content.intro"
            />
          </div>
        </div>

        <h2 class="title is-2">
          Sponsors
        </h2>
        <div class="row columns is-multiline">
          <div v-for="post in data.stories" :key="post.content._uid" class="column is-one-third">
            <SponsorCard
              :url="'/' + post.full_slug"
              :website="post.content.website.url"
              :image="post.content.logo.filename"
              :title="post.content.title"
              :intro="post.content.intro"
            />
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    SponsorCard: () => import('@/components/SponsorCard.vue')
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    const sponsorsRes = context.app.$storyapi.get('cdn/stories', {
    /* return context.app.$storyapi.get('cdn/stories', { */
      version,
      starts_with: `${context.store.state.language}/sponsor/sponsors`,
      filter_query: {
        categories: {
          in_array: 'bad5ac0d-4846-48be-b653-6d2cd0df2b88'
        }
      }
    })

    /* const supportersRes = context.app.$storyapi.get('cdn/stories', { */
    /*   version, */
    /*   starts_with: `${context.store.state.language}/sponsor/sponsors`, */
    /*   filter_query: { */
    /*     categories: { */
    /*       in_array: 'fac2de4d-4a95-484a-b390-636f4a36ee29' */
    /*     } */
    /*   } */
    /* }) */

    /* return { test: sponsorsRes } */
    return sponsorsRes.then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })

    /* console.log('sponsors:', sponsorsRes) */
    /* return { */
    /*   sponsors: sponsorsRes, */
    /*   supporters: supportersRes */
    /* } */
  },
  data () {
    return {
      total: 0,
      sponsors: [],
      supporters: []
    }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  background: no-repeat center ;
  background-size: contain;
}
</style>
