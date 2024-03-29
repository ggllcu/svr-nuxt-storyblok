<template>
  <div>
    <section class="row has-background-primary">
      <div class="container">
        <div class="block">
          <h1 class="title is-1 has-text-white has-text-centered">
            Scaligera Valeggio Rugby
          </h1>
        </div>
      </div>
    </section>
    <section class="row section-summary has-background-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <NuxtImg
                    sizes="xs:288px sm:608px md:736px lg:304px"
                    provider="storyblok"
                    src="https://a.storyblok.com/f/91547/1056x792/8b5d76c954/societa.jpg"
                    alt="Società | Scaligera Valeggio Rugby"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h2 class="title is-5">
                    La società
                  </h2>
                  Informazioni, orari, contatti, numeri utili e altro
                </div>
                <b-button
                  tag="a"
                  href="/it/societa/dove-siamo"
                  type="is-primary"
                  expanded
                >
                  Scopri di più
                </b-button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <NuxtImg
                    sizes="xs:288px sm:608px md:736px lg:304px"
                    provider="storyblok"
                    src="https://a.storyblok.com/f/91547/2048x1536/22810097ad/squadre.jpg"
                    alt="Squadre | Scaligera Valeggio Rugby"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h2 class="title is-5">
                    Le squadre
                  </h2>
                  Squadre, allenatori, allenamenti ed orari
                </div>
                <b-button
                  tag="a"
                  href="/it/societa/squadre"
                  type="is-primary"
                  expanded
                >
                  Scopri di più
                </b-button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <NuxtImg
                    sizes="xs:288px sm:608px md:736px lg:304px"
                    provider="storyblok"
                    src="https://a.storyblok.com/f/91547/1621x1217/dedc52bfb4/store.jpg"
                    alt="Shop | Scaligera Valeggio Rugby"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h2 class="title is-5">
                    Shop
                  </h2>
                  Magliette, merchandising, materiale per allenamenti
                </div>
                <b-button
                  tag="a"
                  href="https://www.macronstore.com/verona/scaligera-valeggio-rugby"
                  type="is-primary"
                  expanded
                >
                  Scopri di più
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row section-content alternate-columns">
      <div class="container">
        <component
          :is="blok.component | dashify"
          v-for="blok in story.content.body"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </section>
    <section class="row section-latest-posts has-background-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2 has-text-centered has-text-white">
              Ultime notizie
            </h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div v-for="post in $store.state.latestPosts" :key="post.content._uid" class="column">
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
      </div>
    </section>
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'

export default {
  layout: 'home',
  components: {
    Date: () => import('@/components/detail/Date.vue'),
    FigureCover: () => import('@/components/List/Figure_Cover.vue')
  },
  asyncData (context) {
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/it/home', {
        version
      })
      .then((res) => {
        // console.log('res.data.story.content.body[0].columns', res.data.story.content.body[0].columns)
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
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  },
  head () {
    const url = ''
    // eslint-disable-next-line
    const { title, description, og_image } = this.story.content.metadata

    return {
      title,
      meta: createSEOMeta({ title, description, image: og_image, url })
    }
  }
}
</script>
