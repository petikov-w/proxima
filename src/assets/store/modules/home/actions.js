//const api = 'http://api.proxima.loc'; // локальный сервер
const api = 'https://api.proxima.kroxdev.ru' // хостинг
import axios from "axios";

export const  setOrder = ({commit}, formData) => {
    axios({
        method: "post",
        url: `${api}/orders`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then(function (response) {
            console.log('actions --->>> ', response.data);
        })
        .catch(function (error) {
            console.log('error --->>> ', error.data);
        });
}

export const  setMobile=({commit}) => { commit('switch_mobile')}
export const  setDesktop=({commit}) => { commit('switch_desktop')}