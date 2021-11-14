<template>
  <div>
    <PageHeader
      title="I nostri sostenitori"
    />
    <main class="container">
      <h2 class="title is-2">
        Main Sponsors
      </h2>
      <div class="row columns is-multiline">
        <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
          <nuxt-link :to="'/' + post.full_slug">
            <div class="card">
              <FigureContain :image="post.content.logo.filename" />
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

      <h2 class="title is-2">
        Sponsors
      </h2>
      <div class="row columns is-multiline">
        <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
          <nuxt-link :to="'/' + post.full_slug">
            <div class="card">
              <FigureContain :image="post.content.logo.filename" />
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

      <h2 class="title is-2">
        Supporters
      </h2>
      <div class="row columns is-multiline">
        <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
          <nuxt-link :to="'/' + post.full_slug">
            <div class="card">
              <FigureContain :image="post.content.logo.filename" />
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
    </main>
  </div>
</template>

<script>
export default {
  components: {
    FigureContain: () => import('@/components/List/Figure_Contain.vue')
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

    const supportersRes = context.app.$storyapi.get('cdn/stories', {
      version,
      starts_with: `${context.store.state.language}/sponsor/sponsors`,
      filter_query: {
        categories: {
          in_array: 'fac2de4d-4a95-484a-b390-636f4a36ee29'
        }
      }
    })

    console.log('sponsorsRes:', sponsorsRes)

    /* return { test: sponsorsRes } */
    return sponsorsRes.then((sponsorsRes) => {
      return { sponsorsRes, supportersRes }
    }).catch((sponsorsRes) => {
      console.log('error:', sponsorsRes)
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
