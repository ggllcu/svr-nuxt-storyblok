<template>
  <time>
    <p class="has-text-dark">
      {{ niceDate }}
    </p>
  </time>
</template>

<style lang="scss" scoped>
time p {
  margin-bottom: 1.5rem;
}
</style>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    niceDate () {
      // console.log('this.date', this.date)
      const dateObj = new Date(this.date)
      const day = dateObj.getDate()
      const month = dateObj.toLocaleString('it-IT', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())
      const year = dateObj.getFullYear()
      return day + ' ' + month + ' ' + year
    }
  }
}
</script>
