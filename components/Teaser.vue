<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
console.log('type: ', typeof blok)
</script>
