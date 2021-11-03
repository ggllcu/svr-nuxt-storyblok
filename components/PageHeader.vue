<template>
  <header
    class="hero is-bold has-text-centered is-medium is-primary"
    :style="{
      'background-image': `url(${backgroundImage})`,
    }"
  >
    <div class="hero-body">
      <h1 class="title is-2 mb-0 pb-2">
        {{ title }}
      </h1>
      <h2 class="title is-3 pt-0">
        {{ subtitle }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    backgroundImage: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 2rem;
  background-position: center;
  background-size: cover;

  .hero-body {
    padding-left: 0;
    padding-right: 0;

    .title {
      background-color: #000000b0;
      padding: 0.75rem 0;
    }
  }
}
</style>
