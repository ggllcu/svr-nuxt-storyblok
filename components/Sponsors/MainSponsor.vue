<template>
  <section>
    <div class="container main-sponsor">
      <h2 class="title is-3 content has-text-centered ">
        Con il sostegno di:
      </h2>
      <div class="columns is-centered">
        <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-4">
          <a :href="post.content.website.url">
            <figure class="image is-3by2" :style="`background-image: url(${post.content.logo})`" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-sponsor {
  padding: 1.25rem;
  figure {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

<script>
export default {
  data () {
    return { total: 0, data: { stories: [] } }
  }
}
</script>
