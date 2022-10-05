import {computed} from "vue";
import {useRoute} from 'vue-router';
const route = useRoute();

const sk = (scrollToTop) => {window.scrollTo(0,0);}
const isHome = computed(() => route.name==='home' ? true : false);

export {  sk, isHome }