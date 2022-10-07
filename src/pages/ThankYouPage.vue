<template lang="pug">
.wrapper-thank
  .thenk
      .title Спасибо за обращение
      .subtitle  наш специалист свяжется с вами в ближайшее время
      router-link(:to={name:"home"} @click="sk" class="link" )
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
    return {btn_to_main, sk}
  }
}
</script>

<style lang="scss" scoped>

</style>