const api = 'http://api.proxima.loc'; // локальный сервер
//const axios = require('axios').default;
import axios from "axios";
const dataSi = [{ name: "Ольга", telefon: "89053458744"}];
export const  zetOrder = ({commit, data}) => {
        axios.post(`${api}/orders`, dataSi )
            .then(responce => {commit('setOrder', responce.data);
                console.log('actions --->>> ', responce);
            })}


