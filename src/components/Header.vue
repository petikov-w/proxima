<template lang="pug">
.header-wrapper
  img(v-if="isHome" :src='logo' alt="logo")
  router-link(v-if="!isHome" :to={name:"home"} @click="sk" class="link" )
    img(:src='logo' alt="logo")
  .info
    Telefon(:tel='contact_telefon' class="m-top")
    span {{ subtitle }}
    //router-link(class="navbar-logo" to="/")
</template>

<script>
import {useStore} from 'vuex';
import {useRoute} from "vue-router";
import {computed} from "vue";
import Telefon from '@/components/UI/NumberTelefon'
import {sk} from "../assets/js/functions"

export default {
  name: 'vHeader',
  components: {Telefon},
  setup() {
    const store = useStore();
    const route = useRoute();
    const isHome = computed(() => route.name==='home' ? true : false);
    const logo = computed(() => store.getters.getLogo);
    const contact_telefon = computed(() => store.getters.getTelefon);
    const subtitle = computed(() => store.getters.getSubtitleHeader);
    return {logo, contact_telefon, subtitle, isHome, sk}
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