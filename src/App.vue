<template>
  <section id="app">
    <Top />
    <Stickers />
    <Footer />
  </section>
</template>

<script>
import Top from './components/Top.vue'
import Stickers from './components/Stickers.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Top,
    Stickers,
    Footer,
  }
}
</script>

<style>
body {
  background: url(./assets/body-bg.jpg) repeat 0 0;
}
</style>
