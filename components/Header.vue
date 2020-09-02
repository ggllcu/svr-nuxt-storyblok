<template>
  <header>
    <b-navbar class="is-primary container">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="/logo_scaligera_valeggio_rugby.png"
            alt="Scaligera Valeggio Rugby"
          >
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown label="Società">
        <b-navbar-item tag="router-link" :to="{ path: '/it/company/about' }">
          Scaligera Valeggio Rugby
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/it/company/organigram' }">
          Organigramma
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/it/company/teams' }">
          Squadre
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/it/company/structure' }">
          Struttura
        </b-navbar-item>
      </b-navbar-dropdown>
        <b-navbar-item tag="router-link" :to="{ path: '/it/sponsors' }">
          Sponsor
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/it/blog' }">
          News
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/it/contact' }">
          Contatti
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
</script>

<style lang="scss">
header {
  background-color: #2b3f74;
  padding: 10px 0;
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
