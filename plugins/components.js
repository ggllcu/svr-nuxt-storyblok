import Vue from 'vue'

// Content Type Components
import Page from '~/components/Page.vue'

// Layout Components
import Container from '~/components/layout/Container.vue'
import Column from '~/components/layout/Column.vue'

// Content Components
import Title from '~/components/content/_Title.vue'
import Text from '~/components/content/_Text.vue'
import Button from '~/components/content/_Button.vue'
import Image from '~/components/content/_Image.vue'
import Carousel from '~/components/content/_Carousel.vue'
import CustomHtml from '~/components/content/_Custom_Html.vue'
import Counter from '~/components/content/_Counter.vue'

Vue.component('blok-page', Page)

Vue.component('blok-container', Container)
Vue.component('blok-column', Column)

Vue.component('blok--title', Title)
Vue.component('blok--text', Text)
Vue.component('blok--button', Button)
Vue.component('blok--image', Image)
Vue.component('blok--carousel', Carousel)
Vue.component('blok--custom-html', CustomHtml)
Vue.component('blok--counter', Counter)
