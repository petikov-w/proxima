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
    li(v-for="item in pageList2_1_Items" :key="index")
      .pageText(v-html="item" )
    ul
      li(v-for="item in pageList2_sub_Items" :key="index")
        .pageText(v-html="item" )
  ul
    li(v-for="item in pageList2_2_Items" :key="index")
      .pageText(v-html="item" )

  .pageText.bold.b5(v-html="pageList5Title" )
  ul
    li(v-for="item in pageList5Items" :key="index")
      .pageText(v-html="item" )

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

    const pageList5Title = computed(() => store.getters.getList5Title);
    const pageList5Items = computed(() => store.getters.getList5Items);

    return { pageTitle,
             pageSubTitle,
             pageList1Title,
             pageList1Items,
             pageList2Title,
             pageList2_1_Items,
             pageList2_2_Items,
             pageList2_sub_Items,
             pageList5Title,
             pageList5Items }
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
