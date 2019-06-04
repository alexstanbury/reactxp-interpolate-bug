const defaultState = {
    sidebar: {
        show: false
    }
};

export default function (state = defaultState, action) {
    console.log(state, action.type);
    switch (action.type) {
        case 'SIDEBAR_TOGGLE': {
            return {...state, ...{sidebar: {show: !state.sidebar.show}}};
        }
        default:
            return state;
    }
}

export const sidebarToggle = () => ({
    type: 'SIDEBAR_TOGGLE',
});

