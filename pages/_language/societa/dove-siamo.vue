<template>
  <div class="structure">
    <PageHeader
      :title="story.content.title"
      :subtitle="story.content.subtitle"
      :background-image="story.content.image.filename"
    />

    <section class="row">
      <div itemscope itemtype="https://schema.org/SportsOrganization">
        <h2 class="title is-2" itemprop="name">
          Scaligera Valeggio Rugby
        </h2>

        <h3 class="title is-3">
          Sede
        </h3>
        <h4 class="title is-4">
          Indirizzo
        </h4>
        <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" class="block">
          <p>
            <span itemprop="streetAddress">Via Berto Barbarani n.3</span><br>
            <span itemprop="addressLocality">Valeggio sul Mincio</span>,
            <span itemprop="addressRegion">VR</span>
            <span itemprop="postalCode">37067</span>
          </p>
        </address>
        <h4 class="title is-4">
          Segreteria
        </h4>
        <span itemprop="telephone">344 2505632</span><br>
        <a href="mailto:segreteria@scaligeravaleggiorugby.it" itemprop="email">segreteria@scaligeravaleggiorugby.it</a>
        <hr>

        <h3 class="title is-3">
          Campo sportivo
        </h3>
        <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
          <p>
            <span itemprop="streetAddress">Via Berto Barbarani n.3</span><br>
            <span itemprop="addressLocality">Valeggio sul Mincio</span>,
            <span itemprop="addressRegion">VR</span>
            <span itemprop="postalCode">37067</span>
          </p>
        </address>
        <hr>
      </div>
    </section>

    <!-- Component for page content -->
    <!-- <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    /> -->
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import('@/components/PageHeader.vue')
  },
  asyncData (context) {
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get(`cdn/stories/${context.params.language}/societa/dove-siamo`, {
        version
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data () {
    return {
      story: { content: {} }
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
  }
}
</script>
