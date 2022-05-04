<template>
  <section class="header">
    <b-carousel
      :autoplay="true"
      :pause-hover="false"
      :interval="3200"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section
          class="hero is-halfheight"
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
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} },
      carousels: [
        {
          text: 'Passione',
          color: 'primary',
          background: 'https://a.storyblok.com/f/91547/828x315/6edd492647/placeholder_scaligera_valeggio_rugby.jpg'
        },
        {
          text: 'Rispetto',
          color: 'info',
          background: 'https://a.storyblok.com/f/91547/828x315/6edd492647/placeholder_scaligera_valeggio_rugby.jpg'
        },
        {
          text: 'Impegno',
          color: 'success',
          background: 'https://a.storyblok.com/f/91547/828x315/6edd492647/placeholder_scaligera_valeggio_rugby.jpg'
        },
        {
          text: 'Famiglia',
          color: 'warning',
          background: 'https://a.storyblok.com/f/91547/828x315/6edd492647/placeholder_scaligera_valeggio_rugby.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
h2.title.is-2 {
  font-size: clamp(3.125rem, 2.25rem + 4.375vw, 7.5rem);
}
</style>
