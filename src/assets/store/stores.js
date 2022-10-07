import {createStore} from "vuex";
import moduleHome from "@/assets/store/modules/home"
import moduleHeader from "@/assets/store/modules/header"
import moduleFooter from "@/assets/store/modules/footer"
import modulePolicy from "@/assets/store/modules/policy"
import moduleAgreement from "@/assets/store/modules/agreement"

export default createStore( {
    modules: {
        moduleHome,
        moduleHeader,
        moduleFooter,
        modulePolicy,
        moduleAgreement
        }
    }
)