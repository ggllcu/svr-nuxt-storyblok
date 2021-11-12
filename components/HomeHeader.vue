<template>
  <section class="header">
    <b-carousel
      :autoplay="true"
      :pause-hover="false"
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
          background: 'https://a.storyblok.com/f/91547/1086x723/eddfefe677/placeholder.jpg'
        },
        {
          text: 'Rispetto',
          color: 'info',
          background: 'https://a.storyblok.com/f/91547/1086x723/eddfefe677/placeholder.jpg'
        },
        {
          text: 'Impegno',
          color: 'success',
          background: 'https://a.storyblok.com/f/91547/1086x723/eddfefe677/placeholder.jpg'
        },
        {
          text: 'Famiglia',
          color: 'warning',
          background: 'https://a.storyblok.com/f/91547/1086x723/eddfefe677/placeholder.jpg'
        }
      ]
    }
  }
}
</script>
