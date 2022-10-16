<template lang="pug">
.wrapper-thank(v-if="isDesktop" )
  .thenk
      .title Спасибо за обращение
      .subtitle  наш специалист свяжется с вами в ближайшее время
      router-link(:to={name:"home"} @click="sk" class="link" )
        img(:src="btn_to_main")
.wrapper-thank-m(v-if="isMobile" )
  .thenk
    .title Спасибо за обращение
    .subtitle  наш специалист свяжется с вами в ближайшее время
    router-link(:to={name:"home"} @click="sk" class="link" style="text-align:center;" )
      img(:src="btn_to_main")

</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {sk} from "../assets/js/functions"

export default {
  name: "ThankYouPage",
  setup() {
    const store = useStore();
    const btn_to_main = computed(() => store.getters.getButtonToMain);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return {btn_to_main, isMobile, isDesktop, sk}
  }
}
</script>

<style lang="scss" scoped>

</style>