<template>
  <div>
    <Header />
    <main id="main" role="main" class="main">
      <div class="container">
        <nuxt />
      </div>
      <MainSponsor />
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
    Form: () => import('@/components/Form.vue'),
    MainSponsor: () => import('@/components/Sponsors/MainSponsor')
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 100px;
}
</style>
