<template lang="pug">
Dialog(v-model:show="dialogVisible")
  include ../assets/pug/formGasOrder
  //include ../assets/pug/formExpressQuestion
.header-wrapper
  img(v-if="isHome" :src='logo' alt="logo")
  router-link(v-if="!isHome" :to={name:"home"} @click="sk" class="link" )
    img(:src='logo' alt="logo")
  .info
    Telefon(:tel='contact_telefon' class="m-top")
    span(@click="showDialog") {{ subtitle }}
    //router-link(class="navbar-logo" to="/")
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
    let in_name = ref("")
    let in_telefon = ref("")
    const form_title = "Задайте свой вопрос оператору";
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
      formData.append('name', in_name.value);
      formData.append('telefon', in_telefon.value);
      formData.append('subject', "Срочный вопрос");
      in_name.value="";
      in_telefon.value="";
      store.dispatch("zetOrder",  formData );
      $router.push('/thankyou')
    }

    return {in_telefon,
            in_name,
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