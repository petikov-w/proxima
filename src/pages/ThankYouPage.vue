<template lang="pug">
.wrapper-thank
  .thenk
      .title Спасибо за обращение
      .subtitle  наш специалист свяжется с вами в ближайшее время
      router-link(:to={name:"home"} @click="sk" class="link" )
        img(:src="btn_to_main")
      //img(src="@/assets/images/btn_back_to_the_site.png" @click="back_to_main")

</template>

<script>
//import $router from "@/routers";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "ThankYouPage",
  setup() {
    const store = useStore();
    const sk = scrollToTop => {window.scrollTo(0,0);};
    const btn_to_main = computed(() => store.getters.getButtonToMain);
    return {btn_to_main, sk}
    // const back_to_main = () => {$router.push('/')};
    // return {back_to_main}
  }
}
</script>

<style lang="scss" scoped>

</style>