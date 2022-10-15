<template lang="pug">
div(v-if="isDesktop")
  .wrapper-home
    include ../assets/pug/policy
div(v-if="isMobile")
  .wrapper-home-m
    include ../assets/pug/policy

</template>

<script>

import {useStore} from 'vuex';
import {computed} from "vue";

export default {
  name: "PolicyPage",
  setup(){
    const store = useStore();
    const pageTitle = computed(() => store.getters.getTitlePage);
    const pageSubTitle = computed(() => store.getters.getSubTitlePage);
    const pageList1Title = computed(() => store.getters.getList1Title);
    const pageList1Items = computed(() => store.getters.getList1Items);
    const pageList2Title = computed(() => store.getters.getList2Title);
    const pageList2_1_Items = computed(() => store.getters.getList2_1_Items);
    const pageList2_2_Items = computed(() => store.getters.getList2_2_Items);
    const pageList2_sub_Items = computed(() => store.getters.getList2_sub_Items);
    const pageList3Title = computed(() => store.getters.getList3Title);
    const pageList3SubTitle = computed(() => store.getters.getList3SubTitle);
    const pageList3_1_Items = computed(() => store.getters.getList3_1_Items);
    const pageList3_2_Items = computed(() => store.getters.getList3_2_Items);
    const pageList3_3_Items = computed(() => store.getters.getList3_3_Items);
    const pageList3_1_sub_Items = computed(() => store.getters.getList3_1_sub_Items);
    const pageList3_2_sub_Items = computed(() => store.getters.getList3_2_sub_Items);
    const pageList4Title = computed(() => store.getters.getList4Title);
    const pageList4Items = computed(() => store.getters.getList4Items);
    const pageList4_sub_Items = computed(() => store.getters.getList4_sub_Items);
    const pageList5Title = computed(() => store.getters.getList5Title);
    const pageList5Items = computed(() => store.getters.getList5Items);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);

    return { pageTitle,
             pageSubTitle,
             pageList1Title,
             pageList1Items,
             pageList2Title,
             pageList2_1_Items,
             pageList2_2_Items,
             pageList2_sub_Items,
             pageList3Title,
             pageList3SubTitle,
             pageList3_1_Items,
             pageList3_2_Items,
             pageList3_3_Items,
             pageList3_1_sub_Items,
             pageList3_2_sub_Items,
             pageList4Title,
             pageList4Items,
             pageList4_sub_Items,
             pageList5Title,
             pageList5Items,
             isMobile,
             isDesktop }
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
