import axios from 'axios';
import { 
    GET_ALL_COUNTRIES, 
    GET_COUNTRY,
    GET_COUNTRY_DETAIL,
    ///CREATE_ACTIVITY,
    START_LOADING,
    FILTER_BY_CONTINENT,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ALL_ACTIVITIES,
    LOGIN,
    LOGOUT
} from './action-types';

export const getAllCountries = () => {
    // return async function (dispatch) { // cuando retornamos una funcion, el dispatch lo recibimos aca
    // const response = await axios.get('https://render-countries.onrender.com/countries')
    // return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })

    return async function (dispatch) { // cuando retornamos una funcion, el dispatch lo recibimos aca para que lo usemos para despachar la acción
        dispatch({type: START_LOADING})
        axios.get('https://render-countries.onrender.com/countries')
        .then(r => r.data)
        .then(json => dispatch({type: GET_ALL_COUNTRIES, payload: json}))
    }
};

// return async function (dispatch) { // cuando retornamos una funcion, el dispatch lo recibimos aca
//     const response = await axios.get('https://render-countries.onrender.com/countries')
//     return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
export const getCountry = (titulo) => {
    return function(dispatch){
        dispatch({type: START_LOADING})
        axios.get(`https://render-countries.onrender.com/countries?name=${titulo}`)
        .then(r => r.data)
        .then(json => dispatch({ type: GET_COUNTRY, payload: json }))
        .catch((error) => console.log(error.response.data.message))
    }
}

export const getCountryDetail = (id) => {
    return function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`https://render-countries.onrender.com/countries/${id}`)
        .then(r => r.data)
        .then(json => dispatch({ type: GET_COUNTRY_DETAIL, payload: json }))
    }
};
//let id = 0
//---------------------------------------------------------------------------------------------
export const getAllActivities = () => {
    return function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get('https://render-countries.onrender.com/activities')
        .then(r => r.data)
        .then(json => dispatch({ type: GET_ALL_ACTIVITIES, payload: json }))
    }
}

export const createActivity = (payload) => {
    return async function(dispatch) {
       let response = await axios.post('https://render-countries.onrender.com/activities', payload);
       return response;
    }
};
//----------------------------------------------------------------------------------------------
export const filterByContinent = (payload) => {
    console.log('dentro de filterByContinent', payload);
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    }
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    };
};

export const OrderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload,
    };
};

//----------------------------------------------------------------------------------------------
export const login = (name = '') => {
    const user = { id: 'ABC', name }
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('logged', JSON.stringify(true));
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    localStorage.removeItem('user'); // Limpiamos el local storage
    localStorage.removeItem('logged');
    return {
        type: LOGOUT,
    }
}