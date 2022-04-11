<template>
  <div v-if="description.length > 0 ">
    <nuxt-link :to="url">
      <div class="card">
        <FigureContain :image="image" />
        <div class="card-content">
          <div class="content">
            <h2 class="title is-5">
              {{ title }}
            </h2>
          </div>
          <div v-if="description.length > 0" class="content">
            {{ description }}
            <br>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
  <div v-else>
    <a :href="website" target="_blank">
      <div class="card">
        <FigureContain :image="image" />
        <div class="card-content">
          <div class="content">
            <h2 class="title is-5">
              {{ title }}
            </h2>
          </div>
          <div v-if="description.length > 0" class="content">
            {{ description }}
          </div>
        </div>
      </div>
    </a>
  </div>
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
    description: {
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
