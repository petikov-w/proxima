<template lang="pug">
.wrapper-thank
  .thenk
      .title Спасибо за обращение
      .subtitle  наш специалист свяжется с вами в ближайшее время
      img(src="@/assets/images/btn_back_to_the_site.png" @click="back_to_main")

</template>

<script>
import $router from "@/routers";

export default {
  name: "ThankYouPage",
  setup() {
    const back_to_main = () => {$router.push('/')};
    return {back_to_main}
  }
}
</script>

<style lang="scss" scoped>

</style>