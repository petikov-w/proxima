<template lang="pug">
.wrapper-home
  .pageTitle {{ pageTitle }}
  .pageText(v-html="pageSubTitle")

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

    return { pageTitle,
             pageSubTitle }
  }
}
</script>

<style lang="scss" scoped>

</style>
