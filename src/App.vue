<template lang="pug">
.wrapper(v-if="isDesktop")
  Header
  .wrapper-content
    .container(v-if="isDesktop")
      router-view
    .container-m(v-if="isMobile")
      router-view
  Footer
.wrapper-m(v-if="isMobile")
  Header
  .wrapper-content
    .container(v-if="isDesktop")
      router-view
    .container-m(v-if="isMobile")
      router-view
  Footer
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";
export default {
    components: { Header, Footer},
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    onMounted(() => { window.addEventListener('resize', function () {
            if (window.innerWidth>400) {
              store.dispatch("setDesktop")
            } else {
              store.dispatch("setMobile")
            }
        })
    })
    return { isMobile, isDesktop}
  }

  }
</script>

<style lang="scss">

</style>
