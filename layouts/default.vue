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
export default {
  components: {
    Header: () => import('@/components/Header.vue'),
    Footer: () => import('@/components/Footer.vue'),
    Form: () => import('@/components/Form.vue')
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding:  1.25rem;
}
</style>
