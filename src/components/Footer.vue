<template lang="pug">
//include ../assets/pug/mixins
footer.footer
  .footer-wrapper
    router-link(:to={name:"policy"} class="link") {{ policy }}
    span {{ agreement }}
    //+formula("Привет")

</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: 'Footer-m',
  setup() {
    const store = useStore();
    const policy = computed(() => store.getters.getPolicy);
    const agreement = computed(() => store.getters.getUserAgreement);

    return {policy, agreement}

  }
}
</script>

<style lang="scss" scoped>

</style>