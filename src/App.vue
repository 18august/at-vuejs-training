<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view/>
    <FooterComp></FooterComp>
  </div>
</template>


<script>
import HeaderComp from '@/components/layouts/Header.vue'
import FooterComp from '@/components/layouts/Footer.vue'

export default {
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>
