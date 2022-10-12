<template lang="pug">
Dialog(v-model:show="dialogVisible")
  include ../assets/pug/formExpressQuestion
.header-wrapper
  img(v-if="isHome" :src='logo' alt="logo")
  router-link(v-if="!isHome" :to={name:"home"} @click="sk" class="link" )
    img(:src='logo' alt="logo")
  .info
    Telefon(:tel='contact_telefon' class="m-top")
    span(@click="showDialog") {{ subtitle }}
</template>

<script>
import {useStore} from 'vuex';
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import Telefon from '@/components/UI/NumberTelefon'
import Dialog from "@/components/UI/Dialog";
import {sk} from "../assets/js/functions"
import $router from "@/routers";

export default {
  name: 'vHeader',
  components: {Telefon, Dialog},
  setup() {
    let eq_name = ref("");
    let eq_telefon = ref("");
    let eq_question = ref("");
    const form_title = "Задайте свой вопрос";
    const dialogVisible = ref(false)

    const store = useStore();
    const route = useRoute();
    const isHome = computed(() => route.name==='home' ? true : false);
    const logo = computed(() => store.getters.getLogo);
    const contact_telefon = computed(() => store.getters.getTelefon);
    const subtitle = computed(() => store.getters.getSubtitleHeader);
    const showDialog = () => {
      dialogVisible.value = true
    }
    const hiddenDialogCloseBtn = () => {
      dialogVisible.value = false;
    }
    const hiddenDialog = () => {
      dialogVisible.value = false;
      let formData = new FormData();
      formData.append('name', eq_name.value);
      formData.append('telefon', eq_telefon.value);
      formData.append('question', eq_question.value);
      eq_name.value="";
      eq_telefon.value="";
      eq_question.value="";
      store.dispatch("sendMail",  formData );
      $router.push('/thankyou')
    }

    return {eq_telefon,
            eq_name,
            eq_question,
            logo,
            dialogVisible,
            contact_telefon,
            subtitle,
            isHome,
            form_title,
            showDialog,
            hiddenDialogCloseBtn,
            hiddenDialog,
            sk}
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_vars.scss";
@import "@/assets/scss/_mixins.scss";
:deep(.telefon) {
  font-family: $font-RussoOne;
  @include font(24px, 400, 29px, #FFFFFF);
  text-decoration: none;
}

</style>