<template>
  <div>
    <section class="header">
      <b-carousel
        :autoplay="true"
        :interval="3200"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section
            class="hero is-medium"
            :style="`background-image: url('${carousel.background}')`"
          >
            <div class="hero-body has-text-centered">
              <h2
                class="title is-2"
                :data-text="carousel.text"
              >
                {{ carousel.text }}
              </h2>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </section>
    <section class="title">
      <div class="container">
        <div class="block">
          <h1 class="title is-1">
            Scaligera Valeggio Rugby
          </h1>
        </div>
      </div>
    </section>
    <section class="section-content">
      <div class="container">
        <!-- Component for page content -->
        <component
          :is="blok.component | dashify"
          v-for="blok in story.content.body"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
      <div class="container has-background-primary">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Acquista il materiale e il merchandising della Scaligera Valeggio Rugby
                </div>
                <b-button
                  tag="a"
                  href="#"
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
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Acquista il materiale e il merchandising della Scaligera Valeggio Rugby
                </div>
                <b-button
                  tag="a"
                  href="#"
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
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Acquista il materiale e il merchandising della Scaligera Valeggio Rugby
                </div>
                <b-button
                  tag="a"
                  href="#"
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
  </div>
</template>

<script>
export default {
  asyncData (context) {
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/it/home', {
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
      story: { content: {} },
      carousels: [
        {
          text: 'Passione',
          color: 'primary',
          background: 'https://a.storyblok.com/f/91547/828x315/48404bb618/placeholder_scaligera_valeggio_rugby.png'
        },
        {
          text: 'Rispetto',
          color: 'info',
          background: 'https://a.storyblok.com/f/91547/828x315/48404bb618/placeholder_scaligera_valeggio_rugby.png'
        },
        {
          text: 'Impegno',
          color: 'success',
          background: 'https://a.storyblok.com/f/91547/828x315/48404bb618/placeholder_scaligera_valeggio_rugby.png'
        },
        {
          text: 'Famiglia',
          color: 'warning',
          background: 'https://a.storyblok.com/f/91547/828x315/48404bb618/placeholder_scaligera_valeggio_rugby.png'
        }
      ]
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
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
</script>
