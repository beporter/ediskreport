import scanner from '../lib/scanner';

/**
 * Define an initial Redux state to use on first-run.
 */
const initialState = {
    root: '/tmp',
    location: '/tmp',
    isLoading: false,
    errorMessage: '',
    results: [],
};

/**
 * Define Redux action name constants.
 */
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_FILES = 'SET_FILES';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/**
 * Define action objects.
 */
export const changeLocation = (payload) => ({ type: CHANGE_LOCATION, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
export const setFiles = (payload) => ({ type: SET_FILES, payload });
export const setErrorMessage = (payload) => ({ type: SET_ERROR_MESSAGE, payload });

/**
 * Define thunks.
 */
export const scanPath = () => {
    return (dispatch, getState) => {
        const state = getState();
        const location = state.browser.location;
        console.log('scanPath(' + location + ')');
        dispatch(setIsLoading(true));
        scanner(location)
            .then(files => {
                dispatch(setFiles(files));
            })
            .catch(error => {
                dispatch(setErrorMessage(error));
            });
    };
};

/**
 * Define reducers.
 */
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LOCATION:
            return { ...state, location: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_FILES:
            return { ...state, isLoading: false, files: action.payload.toString() };
        case SET_ERROR_MESSAGE:
            return { ...state, isLoading: false, errorMessage: action.payload };
        default:
            return state;
    }
}
