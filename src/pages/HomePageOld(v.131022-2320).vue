<template lang="pug">
Dialog(v-model:show="dialogVisible")
  include ../assets/pug/formGasOrder
.wrapper-home
  section-01
    .left-col
      h1(v-if="isMobile" style="color:#ffffff;") Мобильная версия
      h1(v-if="isDesktop" style="color:#ffffff;") Десктопная версия
      .title {{ title }}
      .set-prosent
        .info(v-for="(info,index) in info" :key="index")
          .info-gaz
            .procent {{ info.procent }}
            .name-gaz {{ info.gaz }}
      .subtitle {{ subtitle }}
      img(:src="btnOrder" @click="showDialog")
    .right-col
      img(:src="imgBigCar" class="img-car")
  section-02
    .advantage(v-for="(item,index) in advantage" :key="index")
      img(:src="item.img")
      .title-adv(v-html='item.title')
      .subtitle-adv(v-html='item.descr')

</template>

<script>

import Dialog from "@/components/UI/Dialog";
import {useStore} from 'vuex';
import {ref, computed, onMounted, onUnmounted} from "vue";
import $router from "@/routers";
// import ScreenSize from 'screen-size-vue'

export default {
  name: "HomePage",
  components: {Dialog},

  setup() {
    let in_name = ref("")
    let in_telefon = ref("")
    const form_title = "Получите расчет стоимости доставки";
    const dialogVisible = ref(false)


    const store = useStore();
    const title = computed(() => store.getters.getTitle);
    const subtitle = computed(() => store.getters.getSubtitle);
    const info = computed(() => store.getters.getInfo);
    const btnOrder = computed(() => store.getters.getButtonOrdrer);
    const imgBigCar = computed(() => store.getters.getImageBigCar);
    const advantage = computed(() => store.getters.getAdvantageList);
    const order = computed(() => store.getters.getOrder);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);


    const showDialog = () => {
      dialogVisible.value = true
    }
    const hiddenDialogCloseBtn = () => {
      dialogVisible.value = false;
    }
    const hiddenDialog = () => {
      dialogVisible.value = false;
      let formData = new FormData();
      formData.append('name', in_name.value);
      formData.append('telefon', in_telefon.value);
      formData.append('subject', "Заказ доставки газа");
      in_name.value="";
      in_telefon.value="";
      store.dispatch("setOrder",  formData )
      $router.push('/thankyou')
    }
    return {
      isMobile,
      isDesktop,
      in_name,
      in_telefon,
      dialogVisible,
      title,
      subtitle,
      info,
      btnOrder,
      imgBigCar,
      advantage,
      order,
      form_title,
      showDialog,
      hiddenDialog,
      hiddenDialogCloseBtn
    }
  }
}
</script>

<style lang="scss" scoped>

</style>