<template>
  <div class="box has-text-centered">
    <h3 class="title is-3">
      <Number
        :ref="blok._uid"
        :from="0"
        :to="blok.value"
        :duration="2"
        :delay="0"
        easing="Power1.easeOut"
      />
    </h3>
    <div class="block">
      {{ blok.label }}
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Number: () => import('@/components/Number.vue')
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
