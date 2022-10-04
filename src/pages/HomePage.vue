<template lang="pug">
Dialog(v-model:show="dialogVisible")
  include ../assets/pug/formGasOrder
.wrapper-home
  section-01
    .left-col
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
import {ref} from "vue"
import {useStore} from 'vuex';
import {computed} from "vue";
import $router from "@/routers";

export default {
  name: "HomePage",
  components: {Dialog},
  setup() {
    let in_name = ref("")
    let in_telefon = ref("")
    const dialogVisible = ref(false)

    const store = useStore();
    const title = computed(() => store.getters.getTitle);
    const subtitle = computed(() => store.getters.getSubtitle);
    const info = computed(() => store.getters.getInfo);
    const btnOrder = computed(() => store.getters.getButtonOrdrer);
    const imgBigCar = computed(() => store.getters.getImageBigCar);
    const advantage = computed(() => store.getters.getAdvantageList);




    const showDialog = () => {dialogVisible.value=true}
    const hiddenDialogCloseBtn = () => {dialogVisible.value=false;}
    const hiddenDialog = () => {dialogVisible.value=false; $router.push('/thankyou')}
    return {
            in_name,
            in_telefon,
            dialogVisible,
            title,
            subtitle,
            info,
            btnOrder,
            imgBigCar,
            advantage,
            showDialog,
            hiddenDialog,
            hiddenDialogCloseBtn}
  }
}
</script>

<style lang="scss" scoped>

</style>