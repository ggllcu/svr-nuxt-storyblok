<template>
  <section>
    <div class="container">
      <h1 class="title is-2">
        Con il sostegno di:
      </h1>
      <div class="columns">
        <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column">
          <nuxt-link :to="'/' + post.full_slug">
            <section class="hero">
              <div class="hero-body">
                <div class="container">
                  <h2 class="title">
                    {{ post.content.name }}
                  </h2>
                </div>
              </div>
            </section>
          </nuxt-link>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3" :style="`background-image: url(${post.content.image})`" />
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-5">
                    {{ post.content.name }}
                  </h2>
                </div>
              </div>

              <div class="content">
                {{ post.content.intro }}
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return { total: 0, data: { stories: [] } }
  }
}
</script>
