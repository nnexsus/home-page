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
                browser: action.browser, //image viewer, forgot to rename lol
                deskBrowser: action.deskBrowser, //desktop browser
                notes: action.notes,
                history: action.history
            }

        case 'update_gpu':
            return {
                ...state,
                tier: action.tier
            }

        case 'update_visits':
            return {
                ...state,
                visits: action.visits
            }
        case 'update_addbar':
            return {
                ...state,
                addbar: action.addbar
            }
    }
}

export const initState = {
    link: 'http://www.home.com/',
    browser: false,
    deskBrowser: false,
    notes: false,
    history: false,
    tier: 0,
    visits: {georadio: null, nnserver: null, fishgame: null, weather2: null},
    addbar: 'http://www.home.com/'
}