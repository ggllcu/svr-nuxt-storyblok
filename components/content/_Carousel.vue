<template>
  <div v-editable="blok" class="column">
    <b-carousel>
      <b-carousel-item
        v-for="blok in blok.images"
        :key="blok._uid"
      >
        <span class="image">
          <!-- <img src="https://picsum.photos/200/300"> -->
          <component
            :is="blok.component | dashify"
            :blok="blok"
          />
        </span>
      </b-carousel-item>
    </b-carousel>
  </div>
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

<style lang="scss" scoped>
.column {
  padding: 0;
}
</style>
