<template lang="pug">
//include ../assets/pug/mixins
footer.footer
  .footer-wrapper
    // Если текущая страница - Домашняя или Спасибо или 404
    router-link(v-if="isHome || isThankYou || is404" :to={name:"policy"} @click="sk" class="link" ) {{ policy }}
    router-link(v-if="isHome || isThankYou || is404" :to={name:"useragreement"} @click="sk" class="link" ) {{ agreement }}
    // Если текущая страница - Политика
    router-link(v-if="isPolicy" :to={name:"home"} @click="sk" class="link" ) Вернуться на главную
    router-link(v-if="isPolicy" :to={name:"useragreement"} @click="sk" class="link" ) {{ agreement }}
    // Если текущая страница - Соглашение
    router-link(v-if="isUserAgreement" :to={name:"policy"} @click="sk" class="link" ) {{ policy }}
    router-link(v-if="isUserAgreement" :to={name:"home"} @click="sk" class="link" ) Вернуться на главную

    //+formula("Привет")

</template>

<script>
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';
import {computed} from "vue";
//import functions from "@/assets/js/functions";
export default {
  name: 'Footer-m',
  setup() {
    const store = useStore();
    const route = useRoute();
    const isHome = computed(() => route.name==='home' ? true : false);
    const isPolicy = computed(() => route.name==='policy' ? true : false);
    const isUserAgreement = computed(() => route.name==='useragreement' ? true : false);
    const isThankYou = computed(() => route.name==='thankyou' ? true : false);
    const is404 = computed(() => route.name==='404' ? true : false);

    const policy = computed(() => store.getters.getPolicy);
    const agreement = computed(() => store.getters.getUserAgreement);
    const sk = scrollToTop => {window.scrollTo(0,0);};
    //const sk = functions.sk();

    return {policy, agreement, isHome, isPolicy, isUserAgreement, isThankYou, is404, sk}

  }
}
</script>

<style lang="scss" scoped>

</style>