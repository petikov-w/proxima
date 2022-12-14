//const api = 'http://api.proxima.loc'; // локальный сервер
const api = 'https://api.proxima.kroxdev.ru' // хостинг
import axios from "axios";

export const  sendMail = ({commit},formData) => {
    axios({
        method: "post",
        url: `${api}/sendmail`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then(function (response) {
            console.log('actions --->>> ', response.data);
        })
        .catch(function (error) {
            console.log('error --->>> ', error.data);
        })
};