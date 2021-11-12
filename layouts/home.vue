<template>
  <div>
    <Navbar />
    <main id="main" role="main" class="main home">
      <HomeHeader />
      <Nuxt />
    </main>
    <MainSponsor />
    <Form />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Footer: () => import('@/components/Footer.vue'),
    Form: () => import('@/components/Form.vue'),
    MainSponsor: () => import('@/components/Sponsors/MainSponsor'),
    HomeHeader: () => import('@/components/HomeHeader')
  }
}
</script>

<style lang="scss" scoped>
</style>
