export const setOrder = (state, responce) => {
    console.log('mutation --->>> ', responce.data);
    state.order = responce.data};

