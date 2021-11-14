<template>
  <nuxt-link v-if="intro.length > 0" :to="url">
    <div class="card">
      <FigureContain :image="image" />
      <div class="card-content">
        <div class="content">
          <h2 class="title is-5">
            {{ title }}
          </h2>
        </div>
        <div v-if="intro.length > 0" class="content">
          {{ intro }}
          <br>
        </div>
      </div>
    </div>
  </nuxt-link>
  <a v-else :href="website" target="_blank">
    <div class="card">
      <FigureContain :image="image" />
      <div class="card-content">
        <div class="content">
          <h2 class="title is-5">
            {{ title }}
          </h2>
        </div>
        <div v-if="intro.length > 0" class="content">
          {{ intro }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  components: {
    FigureContain: () => import('@/components/List/Figure_Contain.vue')
  },
  props: {
    url: {
      type: String,
      required: true,
      default: null
    },
    image: {
      type: String,
      required: true,
      default: null
    },
    title: {
      type: String,
      required: true,
      default: null
    },
    intro: {
      type: String,
      required: true,
      default: null
    },
    website: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
