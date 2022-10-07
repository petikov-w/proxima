const api = 'http://api.proxima.loc'; // локальный сервер
import axios from "axios";

let formData = new FormData();
formData.append('name', "Ольга");
formData.append('telefon', "89053458744");

export const  zetOrder = ({commit}) => axios({
    method: "post",
    url: `${api}/orders`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
})
    .then(function (response) {
        //handle success
        console.log('actions --->>> ', response.data);
    })
    .catch(function (error) {
        //handle error
        console.log('error --->>> ', error.data);
    });


// .then(responce => {commit('setOrder', responce.data);
//     console.log('actions --->>> ', responce.data);
// })}
//

