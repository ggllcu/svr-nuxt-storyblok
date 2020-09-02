<template>
  <div v-editable="blok">
    <h1>{{ blok.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
