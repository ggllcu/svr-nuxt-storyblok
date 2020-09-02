<template>
  <b-navbar-item tag="router-link" :to=link>
    {{ name }}
  </b-navbar-item>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    name: String,
    link: Number
  }
}
</script>
