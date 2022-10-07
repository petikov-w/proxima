<template lang="pug">
.wrapper-home
  .pageTitle {{ pageTitle }}
  .pageText(v-html="pageSubTitle")
  .pageText.bold.b5(v-html="pageList1Title" )
  ul
    li(v-for="item in pageList1Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList2Title" )
  ul
    li(v-for="item in pageList2Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList3Title" )
  ul
    li(v-for="item in pageList3Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList4Title" )
  ul
    li(v-for="item in pageList4Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList5Title" )
  ul
    li(v-for="item in pageList5Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList6Title" )
  ul
    li(v-for="item in pageList6Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList7Title" )
  ul
    li(v-for="item in pageList7Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold.b5(v-html="pageList8Title" )
  ul
    li(v-for="item in pageList8Items" :key="index")
      .pageText(v-html="item" )
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
             pageList8Items
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
