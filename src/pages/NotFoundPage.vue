<template lang="pug">
.wrapper-home2
  .is404 404
  .title Страница не найдена
  router-link(:to={name:"home"} @click="sk" class="link" )
    img(:src="btn_to_main")
</template>

<script>
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";
import {sk} from "../assets/js/functions"

export default {
  name: "NotFoundPage",
  setup() {
    const store = useStore();
    const btn_to_main = computed(() => store.getters.getButtonToMain);
    onMounted(() => {sk()});
    return {btn_to_main, sk}
  }
}
</script>

<style lang="scss" scoped>

</style>