<template>
  <div>
    <section class="header">
      <b-carousel
        :autoplay="true"
        :interval="3500"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      carousels: [
        { text: 'Passione', color: 'primary' },
        { text: 'Rispetto', color: 'info' },
        { text: 'Impegno', color: 'success' },
        { text: 'Famiglia', color: 'warning' }
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
