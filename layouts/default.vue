<template>
  <div>
    <Header />
    <main id="main" role="main" class="main">
      <div class="container">
        <nuxt />
      </div>
    </main>
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Form from '~/components/Form'

export default {
  components: {
    Header,
    Footer,
    Form
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding:  1.25rem;
}
</style>
