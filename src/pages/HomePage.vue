<template lang="pug">
Dialog(v-model:show="dialogVisible1")
  include ../assets/pug/formGasOrder
Dialog(v-model:show="dialogVisible2")
  include ../assets/pug/formExpressQuestion
  //----------------------- Десктопная версия -----------------------
div(v-if="isDesktop" )
  .wrapper-home
    section-01
      .left-col
        //h1(v-if="isMobile" style="color:#ffffff;") Мобильная версия
        //h1(v-if="isDesktop" style="color:#ffffff;") Десктопная версия
        .title {{ title }}
        .set-prosent
          .info(v-for="(info,index) in info" :key="index")
            .info-gaz
              .procent {{ info.procent }}
              .name-gaz {{ info.gaz }}
        .subtitle {{ subtitle }}
        img(:src="btnOrder" @click="showDialog1")
      .right-col
        img(:src="imgBigCar" class="img-car")
    section-02
      .advantage(v-for="(item,index) in advantage" :key="index")
        img(:src="item.img")
        .title-adv(v-html='item.title')
        .subtitle-adv(v-html='item.descr')
  //----------------------- Мобильная версия -----------------------
div(v-if="isMobile" )
  .wrapper-home-m
    //section-01m
      //.left-col
    //h1(v-if="isMobile" style="color:#ffffff;") Мобильная версия
    //h1(v-if="isDesktop" style="color:#ffffff;") Десктопная версия
    .title-m {{ title }}
    .set-prosent-m
      .info(v-for="(info,index) in info" :key="index")
        .info-gaz
          .procent {{ info.procent }}
          .name-gaz {{ info.gaz }}
    .subtitle-m {{ subtitle }}
    img.mb10(:src="btnOrder" @click="showDialog1")
    img(:src="btnQuest" @click="showDialog2")
    //.right-col
    //  img(:src="imgBigCar" class="img-car")
    section-02
      .advantage(v-for="(item,index) in advantage" :key="index")
        img(:src="item.img")
        .title-adv(v-html='item.title')
        .subtitle-adv(v-html='item.descr')


</template>

<script>

import Dialog from "@/components/UI/Dialog";
import {useStore} from 'vuex';
import {ref, computed} from "vue";
import $router from "@/routers";


export default {
  name: "HomePage",
  components: {Dialog},

  setup() {
    let in_name = ref("");
    let in_telefon = ref("");
    let eq_name = ref("");
    let eq_telefon = ref("");
    let eq_question = ref("");
    const form_title1 = "Получите расчет стоимости доставки";
    const form_title2 = "Задайте свой вопрос";
    const dialogVisible1 = ref(false)
    const dialogVisible2 = ref(false)


    const store = useStore();
    const title = computed(() => store.getters.getTitle);
    const subtitle = computed(() => store.getters.getSubtitle);
    const info = computed(() => store.getters.getInfo);
    const btnOrder = computed(() => store.getters.getButtonOrdrer);
    const btnQuest = computed(() => store.getters.getButtonQuest);
    const imgBigCar = computed(() => store.getters.getImageBigCar);
    const advantage = computed(() => store.getters.getAdvantageList);
    const order = computed(() => store.getters.getOrder);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);


    const showDialog1 = () => {
      dialogVisible1.value = true
    }
    const showDialog2 = () => {
      dialogVisible2.value = true
    }
    const hiddenDialogCloseBtn1 = () => {
      dialogVisible1.value = false;
    }
    const hiddenDialogCloseBtn2 = () => {
      dialogVisible2.value = false;
    }
    const hiddenDialog1 = () => {
      dialogVisible1.value = false;
      let formData = new FormData();
      formData.append('name', in_name.value);
      formData.append('telefon', in_telefon.value);
      formData.append('subject', "Заказ доставки газа");
      in_name.value="";
      in_telefon.value="";
      store.dispatch("setOrder",  formData )
      $router.push('/thankyou')
    }
    const hiddenDialog2 = () => {
      dialogVisible2.value = false;
      let formData = new FormData();
      formData.append('name', eq_name.value);
      formData.append('telefon', eq_telefon.value);
      formData.append('question', eq_question.value);
      eq_name.value="";
      eq_telefon.value="";
      eq_question.value="";
      store.dispatch("sendMail",  formData )
      $router.push('/thankyou')
    }
    return {
      isMobile,
      isDesktop,
      in_name,
      in_telefon,
      eq_name,
      eq_telefon,
      eq_question,
      // dialogVisible,
      dialogVisible1,
      dialogVisible2,
      title,
      subtitle,
      info,
      btnOrder,
      btnQuest,
      imgBigCar,
      advantage,
      order,
      form_title1,
      form_title2,
      //showDialog,
      showDialog1,
      showDialog2,
      //hiddenDialog,
      hiddenDialog1,
      hiddenDialog2,
      //hiddenDialogCloseBtn,
      hiddenDialogCloseBtn1,
      hiddenDialogCloseBtn2
    }
  }
}
</script>

<style lang="scss" scoped>
 .mb10 {
   margin-bottom: 10px;
 }
</style>