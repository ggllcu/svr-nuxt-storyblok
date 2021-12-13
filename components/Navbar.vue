<template>
  <div class="has-background-primary">
    <b-navbar class="is-primary container">
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="'/'">
          <img
            :src="'//a.storyblok.com/f/91547/309x458/25f06f46c6/logo_scaligera_valeggio_rugby.png' | transformImage('0x104')"
            alt="Scaligera Valeggio Rugby"
          >
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown label="Società">
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/societa/chi-siamo' }">
            Scaligera Valeggio Rugby
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/societa/organigramma' }">
            Organigramma
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/societa/squadre' }">
            Squadre
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/societa/dove-siamo' }">
            Dove siamo
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Sponsor">
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/sponsor/sponsors' }">
            Elenco
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" :to="{ path: '/it/sponsor/sostienici' }">
            Sostienici
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/it/news' }">
          News
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/#contact' }">
          Contatti
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style lang="scss">
header {
  background-color: #2b3f74;
}
nav {
  padding: 10px;
}
.navbar-brand {
  img {
    max-height: 3.25rem;
  }
  .navbar-item {
    padding: 0;
  }
}
</style>
