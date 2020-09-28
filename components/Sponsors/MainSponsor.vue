<template>
  <section>
    <h1 class="title is-2">
      Main Sponsor
    </h1>
    <div class="columns is-multiline">
      <div v-for="post in $store.state.mainSponsors" :key="post.content._uid" class="column is-one-third">
        <nuxt-link :to="'/' + post.full_slug">
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
        </nuxt-link>
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
