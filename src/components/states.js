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

        case 'update_gpu':
            return {
                ...state,
                tier: action.tier
            }

    }
}

export const initState = {
    link: null,
    browser: false,
    tier: 0,
}