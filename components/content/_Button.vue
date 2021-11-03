<template>
  <b-button
    tag="a"
    :href="blok.link"
    type="is-primary"
  >
    {{ blok.text }}
  </b-button>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
