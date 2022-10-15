<template lang="pug">
div(v-if="isDesktop")
  .wrapper-home
    include ../assets/pug/agreement
div(v-if="isMobile")
  .wrapper-home-m
    include ../assets/pug/agreement
</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";

export default {
  name: "HomePage",

  setup(){
    const store = useStore();
    const pageTitle = computed(() => store.getters.getTitlePageAgreement);
    const pageSubTitle = computed(() => store.getters.getSubTitlePageAgreement);
    const pageList1Title = computed(() => store.getters.getList1TitleAgreement);
    const pageList1Items = computed(() => store.getters.getList1ItemsAgreement);
    const pageList2Title = computed(() => store.getters.getList2TitleAgreement);
    const pageList2Items = computed(() => store.getters.getList2ItemsAgreement);
    const pageList3Title = computed(() => store.getters.getList3TitleAgreement);
    const pageList3Items = computed(() => store.getters.getList3ItemsAgreement);
    const pageList4Title = computed(() => store.getters.getList4TitleAgreement);
    const pageList4Items = computed(() => store.getters.getList4ItemsAgreement);
    const pageList5Title = computed(() => store.getters.getList5TitleAgreement);
    const pageList5Items = computed(() => store.getters.getList5ItemsAgreement);
    const pageList6Title = computed(() => store.getters.getList6TitleAgreement);
    const pageList6Items = computed(() => store.getters.getList6ItemsAgreement);
    const pageList7Title = computed(() => store.getters.getList7TitleAgreement);
    const pageList7Items = computed(() => store.getters.getList7ItemsAgreement);
    const pageList8Title = computed(() => store.getters.getList8TitleAgreement);
    const pageList8Items = computed(() => store.getters.getList8ItemsAgreement);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { pageTitle,
             pageSubTitle,
             pageList1Title,
             pageList1Items,
             pageList2Title,
             pageList2Items,
             pageList3Title,
             pageList3Items,
             pageList4Title,
             pageList4Items,
             pageList5Title,
             pageList5Items,
             pageList6Title,
             pageList6Items,
             pageList7Title,
             pageList7Items,
             pageList8Title,
             pageList8Items,
             isMobile,
             isDesktop
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    margin-left: 30px;
  }
  .b5 {
    font-size: 20px;
    opacity: 0.5;
  }
</style>
