export const setOrder = (state, responce) => {
    console.log('mutation --->>> ', responce.data);
    state.order = responce.data
};

export const switch_mobile = (state) => {
        state.isMobile = true;
        state.isDesktop = false;
    };
export const switch_desktop = (state) => {
    state.isMobile = false;
    state.isDesktop = true;
};

