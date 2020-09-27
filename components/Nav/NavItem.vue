<template>
  <b-navbar-item tag="router-link" :to="link">
    {{ name }}
  </b-navbar-item>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: String,
      required: true,
      default: ''

    }
  }
}
</script>
