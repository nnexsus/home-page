export const reducer = (state, action) => {
    switch (action.type) {
        case 'update_link':
            return {
                ...state,
                link: action.link,
                browser: action.browser
            }

            default:
                return state

        case 'update_app':
            return {
                ...state,
                browser: action.browser,
            }

    }
}

export const initState = {
    link: null,
    browser: false,
}