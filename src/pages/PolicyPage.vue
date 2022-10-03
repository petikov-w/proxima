<template lang="pug">
.wrapper-home
  .pageTitle {{ pageTitle }}
  .pageText(v-html="pageSubTitle")
  .pageText.bold(v-html="pageList1Title" )
  ul
    li(v-for="item in pageList1Items" :key="index")
      .pageText(v-html="item" )
  .pageText.bold(v-html="pageList5Title" )
  ul
    li(v-for="item in pageList5Items" :key="index")
      .pageText(v-html="item" )

</template>

<script>

// import {useRoute} from "vue-router";
// import store from "@/assets/store/store";
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
    const pageList5Title = computed(() => store.getters.getList5Title);
    const pageList5Items = computed(() => store.getters.getList5Items);

    return { pageTitle,
             pageSubTitle,
             pageList1Title,
             pageList1Items,
             pageList5Title,
             pageList5Items }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    margin-left: 20px;
  }
</style>
